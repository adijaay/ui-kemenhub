@Library('shared-library')_
def deployImage = new DeployImage()
def devSecOps = new DevSecOps()

env.DEPLOY = ""


pipeline {
    parameters {

        //sesuaikan produk name dengan nama service #diisi team produk
        string(name: 'PRODUK', defaultValue:'ppp')
        string(name: 'NAME_SERVICE', defaultValue: 'ui-kemenhub-fe')
        string(name: 'KUBE_NAMESPACE', defaultValue: 'kemenhub')
        string(name: 'KUBE_DEPLOYMENT_NAME', defaultValue: 'ui-kemenhub')

        //sesuaikan cluster name #konfirmasi ke team devops
        string(name: 'PRODUCTION_CLUSTER_NAME', defaultValue: 'aws-prod')
        string(name: 'STAGING_CLUSTER_NAME', defaultValue: 'aws-stage')
        string(name: 'DEVELOPMENT_CLUSTER_NAME', defaultValue: 'aws-dev')
        string(name: 'DEFECTDOJO_ENGAGEMENT_ID', defaultValue: '3')
    }

    agent none
  
    options {
        skipDefaultCheckout()
    }

 stages {
        
        stage('Kill Old Build') {
            steps {
                script {
                    KillOldBuild()
                }
            }
        }

        stage('Checkout SCM') {
            agent { label 'Docker' }
            steps {
                script {
                    deployImage.cleanAll()
                    //deployImage.CreateEnvAWSDev("aws-dev", "ifan-test1-dev", "quotes")
                }
                checkout scm
                script {
                    echo "get COMMIT_ID"
                    sh 'echo -n $(git rev-parse --short HEAD) > ./commit-id'
                    commitId = readFile('./commit-id').trim()

                    if( env.BRANCH_NAME == 'development' ){
                            NAMESPACE = "${params.PRODUK}-dev"
                            echo "${NAMESPACE}"

                    } else if(env.BRANCH_NAME == 'staging') {
                        NAMESPACE = "${params.PRODUK}-staging"
                        echo "${NAMESPACE}"

                              
                    } else if (env.BRANCH_NAME == 'main') {
                        NAMESPACE = "${params.PRODUK}-prod"
                                     
                    }
                
                }
                stash(name: 'ws', includes: '**, ./commit-id')
            }
        }

        stage('Secret Check') {
            parallel {
                stage('Agent: docker (Node.js)') {
                    agent {
                        docker {
                            alwaysPull false
                            image 'playcourt/jenkins:nodejs20'
                            label 'Docker'
                            args '-u root --entrypoint "" '
                        }
                    }
                    steps {
                        cleanWs()
                    }
                }

                stage('Gitleaks Scan') {
                    agent { 
                       docker {
                            alwaysPull false
                            image "playcourt/jenkins:gitleaks"
                            label "Docker"
                            args "--entrypoint="       
                        }    
                    }
                    steps {
                        script {
                            devSecOps.gitleaks(params.PRODUK,params.NAME_SERVICE)
                        }
                    }   
                }
            }
        }

        stage('Static Application Security Testing (SAST)') {
            parallel {
                stage('Sonarqube Scan') {
                    agent {
                        docker {
                            alwaysPull false
                            image 'playcourt/jenkins:nodejs20'
                            label 'Docker'
                            args '-u root --entrypoint "" -v /var/lib/jenkins:/var/lib/jenkins'
                        }
                    }
                    steps {
                         unstash 'ws'
                        script {
                            echo "disbale"
                            
                            def scannerHome = tool 'SonarScanner'
                            withSonarQubeEnv('SonarQube') {
                                sh "${scannerHome}/bin/sonar-scanner"
                            }

                        }
                    }
                }

                // stage('OWASP Dependency-Check Vulnerabilities') {
                //         agent { label 'Docker' }
                //         steps {
                //              unstash 'ws'
                //             script {
                //                 devSecOps.dependencyCheck(params.PRODUK,params.NAME_SERVICE)
                //             }
                //         }
                // }
            }    
        }
          
        stage('Build Docker') {
            agent { label 'Docker' }
                steps {
                    unstash 'ws'
                    script {
                    env.nodeName = env.NODE_NAME
                    

                    def inputCHOICES
                    timeout(2) {
                        userInput = input(
                            id: 'userInput', message: 'Pilih Environment :?',
                            parameters: [
                                    
                                choice(name: 'DEPLOY', choices: ['true', 'false',], description: 'lanjukan proses build ?') ,
                                choice(name: 'ENV', choices: ['aws', 'flou',], description: 'pilih environment registry')  
                                                     
                            ]
                        )
                    }
                   
                    env.ENV  = userInput.ENV
                    env.DEPLOY = userInput.DEPLOY

                    if ( DEPLOY == 'false' ) {
                        echo "skip"
                    } else {
                        if( env.BRANCH_NAME == 'development' ){
                            CLUSTER_NAME = "${params.DEVELOPMENT_CLUSTER_NAME}"
                            echo "${CLUSTER_NAME}"

                        } else if(env.BRANCH_NAME == 'staging') {
                            CLUSTER_NAME = "${params.STAGING_CLUSTER_NAME}"
                            echo "${CLUSTER_NAME}"

                        } else if (env.BRANCH_NAME == 'main') {
                            CLUSTER_NAME = "${params.PRODUCTION_CLUSTER_NAME}"
                            echo "${CLUSTER_NAME}"
                                
                        }
                        
                        deployImage.CreateEnvAWSDev("${CLUSTER_NAME}", "${NAMESPACE}", params.NAME_SERVICE)

                        sh '''
                        
                            export $(grep -v '^#' .env | xargs)
                            
                            printenv | grep GIT_USERNAME
                            
                            docker build --build-arg GIT_TOKEN=$GIT_TOKEN --build-arg GIT_USERNAME=$GIT_USERNAME --no-cache -t $NAME_SERVICE:latest .
                        
                        '''

                    }
                    
                }
            }
        }
       
        stage('Dynamic Application Security Testing (DAST)') {
            parallel {
                stage('Trivy') {
                    agent {
                        docker {
                            alwaysPull false
                            image 'playcourt/jenkins:trivy'
                            label "${env.nodeName}"
                            args '-u root -v /var/run/docker.sock:/var/run/docker.sock --entrypoint ""'
                            reuseNode true
                        }
                    }
                    steps {
                        script {
                            if( env.DEPLOY == 'false' ){
                                echo "skip"

                            }else  {
                                script {
                                    devSecOps.scanImage(params.PRODUK,params.NAME_SERVICE,params.NAME_SERVICE)
                                }

                            }
                            
                        }
                    }
                }
            }
        }

        stage('Push to AWS ECR') {
            agent { label "${env.nodeName}" }

            steps {

                script {
                    if ( env.DEPLOY == 'false' ){
                        echo "skip"
                    } else {
                        if( env.BRANCH_NAME == 'development' ){
                        
                            deployImage.pushEcrAWSPPPStage(params.STAGING_CLUSTER_NAME, "${NAMESPACE}",params.NAME_SERVICE, "${commitId}", params.KUBE_NAMESPACE, params.KUBE_DEPLOYMENT_NAME)

                        } else if(env.BRANCH_NAME == 'staging') {

                            if(env.ENV == 'aws'){
                                deployImage.pushEcrAWSPPPStage(params.STAGING_CLUSTER_NAME, "${NAMESPACE}",params.NAME_SERVICE, "${commitId}", params.KUBE_NAMESPACE, params.KUBE_DEPLOYMENT_NAME)
                            } else if(env.ENV == 'flou'){
                                deployImage.pushFlouPPPStage("flou-stage", "${NAMESPACE}",params.NAME_SERVICE, "${commitId}", params.KUBE_NAMESPACE, params.KUBE_DEPLOYMENT_NAME)
                            }
                            

                        } else if (env.BRANCH_NAME == 'main') {
                        
                            deployImage.pushEcrAWSPPPStage(params.STAGING_CLUSTER_NAME, "${NAMESPACE}",params.NAME_SERVICE, "${commitId}", params.KUBE_NAMESPACE, params.KUBE_DEPLOYMENT_NAME)
                        }
                    }                    
                }
            }
        }
    }


    post {
       always {

           node('Docker') {
                echo "Sending notification"
           }
       }

       failure {
           node(env.nodeName) {
               script {
                   echo "Handling failure"
               }
           }
       }
    }
}
