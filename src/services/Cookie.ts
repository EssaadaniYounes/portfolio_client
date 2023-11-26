class Cookie {
  constructor(cookies: any) {
    this.cookies = cookies;
  }
  //Methods
  static async setCookie(name: string, value: any, days: number) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }
  getCookie(name: string) {
    return this.cookies.get(name);
  }
  isExist(name: string) {
    return this.cookies.has(name);
  }
  static getClientCookie(name: string) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
  }
  static async removeCookie(name: string) {
    document.cookie =
      name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  }
}
export default Cookie;
