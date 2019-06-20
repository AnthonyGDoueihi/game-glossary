export const getCookie = () => {
  return document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
}

// Removes the cookie
  // document.cookie = "token="
