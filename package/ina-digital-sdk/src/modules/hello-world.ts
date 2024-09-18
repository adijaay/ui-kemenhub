export function sayHello() {
  console.log('hi')
}
export function sayGoodbye() {
  console.log('goodbye')
}

export function sayGoodbyeV2(token: string) {
  generateName(token)
}

function generateName(token: string) {
  return 'hi' + token;
}