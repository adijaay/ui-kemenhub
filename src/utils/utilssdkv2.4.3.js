// script ini berfungsi untuk komunkasi antara MiniApp dan MainApp
export default class UtilsSDK {
  // constructor() {
  //   if (!this.isInaDigital()) {
  //     //   throw new Error("Invalid Site ...");
  //     location.href = "/invalid-site";
  //   }
  //   window.addEventListener(
  //     "flutterInAppWebViewPlatformReady",
  //     async function (event) {},
  //   );
  // }
  async callHandler(
    method = "",
    arg1 = null,
    arg2 = null,
    arg3 = null,
    arg4 = null,
    arg5 = null,
    arg6 = null,
  ) {
    return await this.handlerMobile(method, arg1, arg2, arg3, arg4, arg5, arg6);

    // ON DEV
    // if (typeof window.flutter_inappwebview != "undefined"){ // if mobile
    //     return await this.handlerMobile(method, arg1, arg2, arg3, arg4, arg5, arg6);
    // } else {
    //     return await this.handlerWeb(method, arg1, arg2, arg3, arg4, arg5, arg6);
    // }
  }

  // mobile handler
  async handlerMobile(
    method = "",
    arg1 = null,
    arg2 = null,
    arg3 = null,
    arg4 = null,
    arg5 = null,
    arg6 = null,
  ) {
    return new Promise((resolve, reject) => {
      const callHandler = async () => {
        try {
          var _callback = await window.flutter_inappwebview.callHandler(
            "handlerFunc",
            method,
            arg1,
            arg2,
            arg3,
            arg4,
            arg5,
            arg6,
          );
          resolve(_callback);
        } catch (e) {
          console.log(method, "must run in mobile app ina-digital");
          reject(null);
        }
      };

      callHandler();
    });
  }

  isInaDigital() {
    if (window.navigator.userAgent != null) {
      if (window.navigator.userAgent.includes("ina-mobile")) {
        return true;
      } else if (window.navigator.userAgent.includes("ina-web")) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  // ON DEV
  // async handlerWeb(method = "", arg1 = null, arg2 = null, arg3 = null, arg4 = null, arg5 = null, arg6 = null) {
  //     return new Promise(async (resolve, reject) => {
  //         try {
  //             window.parent.postMessage({ type: method, arg1, arg2, arg3, arg4, arg5, arg6 }, "*");
  //             resolve(true);
  //         } catch (e) {
  //             console.log(method, "")
  //             reject(null)
  //         }
  //     });
  // }

  // set ActionBar
  // Icons: https://icons8.com/line-awesome or Absolute Url Images ex: https://example.com/yourimage.png
  // [[params]]
  // [
  //     {
  //         icon:"", // icon [required if label empty]
  //         label:"", // label [required if icon empty]
  //         url: "", // if not empty [link will be open on-click]
  //         onClick:"", // js Handler
  //     }
  // ]
  async actionBar(params = []) {
    return await this.callHandler("actionBar", params);
  }

  // select contact
  // callback:
  // {
  //     name: 'Contact Name',
  //     phones: [+6288292829829]
  // }
  async selectContact() {
    return await this.callHandler("selectContact");
  }

  // close webview
  async closeApp() {
    return await this.callHandler("close");
  }

  // showOverlay
  async appbarOverlay(enabled = true, color = "#000000", opacity = 0.2) {
    if (enabled) {
      return await this.callHandler("overlay", color, opacity);
    } else {
      return await this.callHandler("overlay", "", 0.0);
    }
  }

  // visible Appbar
  async visibleAppbar(visible = true) {
    return await this.callHandler("appbar", visible);
  }

  // visible Back Button
  async visibleBackButton(visible = true) {
    return await this.callHandler("backButton", visible);
  }

  // pullToRefresh
  async allowPullToRefresh(allowed = true) {
    return await this.callHandler("pullRefresh", allowed);
  }

  // requestPermission
  // available:
  // - location, camera, microphone
  // callback:
  // [
  //  {
  //     "type":"location",
  //     "status":"granted",// granted | denied | restricted | permanentlyDenied | limited | provisional
  //  }
  // ]
  async requestPermission(type = []) {
    return await this.callHandler("requestPermission", type);
  }

  // check gps service
  // callback: enabled | disabled
  async gpsService() {
    return await this.callHandler("gpsService");
  }

  // open mainApp setting
  async openSetting() {
    return await this.callHandler("openSetting");
  }

  // getCurrentLocation Mobile App
  // callback:
  // {
  //     location:
  //      null
  //       or
  //      longitude, atitude, timestamp, accuracy, altitude, altitudeAccuracy, heading, headingAccuracy, speed, speedAccuracy,
  //     place:
  //      null
  //       or
  //      name, street, isoCountryCode, country, postalCode, administrativeArea, subAdministrativeArea, locality, subLocality, thoroughfare, subThoroughfare,
  // }
  async getCurrentLocation() {
    return await this.callHandler("getCurrentLocation");
  }

  // open external browser
  async openBrowser(url) {
    return await this.callHandler("openBrowser", url);
  }

  // set tittle current pages
  async setTitle(newTitle = "") {
    return await this.callHandler("setTitle", newTitle);
  }

  // loadUrl directly
  async loadUrl(newUrl = "") {
    return await this.callHandler("loadUrl", newUrl);
  }

  // handle onBack button click in main-app
  async onBack(type = "", params = "", isClear = true) {
    return await this.callHandler("onBack", type, params, isClear);
  }

  // clear all history pages
  async clearHistory() {
    return await this.callHandler("clearHistory");
  }

  // go-back by script
  async goBack(step = 1) {
    return await this.callHandler("goBack", step);
  }

  // go-home by script
  async goHome() {
    return await this.callHandler("goHome");
  }

  // go forward by script
  async goForward(step = 1) {
    return await this.callHandler("goForward", step);
  }

  // show toast in mainapp
  async toast(msg = "") {
    return await this.callHandler("toast", msg);
  }

  // show loading in mainapp
  async showLoading() {
    return await this.callHandler("showLoading");
  }
  // hide loading in mainapp
  async hideLoading() {
    return await this.callHandler("hideLoading");
  }

  // show modal error
  async modalError(title = "", msg = "", args = {}) {
    return await this._modalHandler("modalError", title, msg, args);
  }

  // show modal success
  async modalSuccess(title = "", msg = "", args = {}) {
    return await this._modalHandler("modalSuccess", title, msg, args);
  }
  // show modal info
  async modalInfo(title = "", msg = "", args = {}) {
    return await this._modalHandler("modalInfo", title, msg, args);
  }

  // [[CONFIG]]
  // title: '', // title
  // msg: '',  // description
  // args: {
  //     isLoading: false, // show loading in modal (default: false)
  //     dismissible: true, // user can close modal on click outside modal & click back button (default: true)
  //     enableCloseButton: true, // show close button in modal (default: true)
  //     customButton: [ // add multiple custom button inside modal
  //         {
  //             text: "Custom Button - 1", // label button
  //             disabled: false, // if true, button is disabled
  //             backgroundColor: "#FFFF00", // background color
  //             textColor: "#FFFFFF", // text color
  //             borderColor: "#FFFF00", // border color
  //             onclick: "location.href='/detail.html'", // js handler on click button
  //             closeonclick: true, // close modal on click button (default: true)
  //         }
  //     ]
  // }
  async _modalHandler(type = "", title = "", msg = "", args = {}) {
    var isLoading = false;
    var dismissible = true;
    var enableCloseButton = true;
    var customButton = [];
    if (typeof args.isLoading != "undefined") {
      isLoading = args.isLoading;
    }
    if (typeof args.dismissible != "undefined") {
      dismissible = args.dismissible;
    }
    if (typeof args.enableCloseButton != "undefined") {
      enableCloseButton = args.enableCloseButton;
    }
    if (typeof args.customButton != "undefined") {
      customButton = args.customButton;
    }
    return await this.callHandler(
      type,
      title,
      msg,
      isLoading,
      dismissible,
      enableCloseButton,
      customButton,
    );
  }

  // inject js script in mainapp
  async inject(script = "") {
    return await this.callHandler("inject", script);
  }

  // Open MainApp Pages from miniapp
  // support pages :
  // /home = MainApp HomePage (auth,no-auth & prod mode)
  // /profile = MainApp profile pages (auth & prod mode)
  // /riwayat = MainApp riwayat pages (auth)
  // /login = MainApp login pages (no-auth & prod mode)
  async toMainApp(pages = "/home") {
    return await this.callHandler("toMainApp", pages);
  }

  // toPdf
  async toPdf(filename = "", url = "", title = "") {
    return await this.callHandler("toPdf", filename, url, title);
  }
}
