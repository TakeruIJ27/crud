/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
export function setCookie(name, value, numOfExpirationDay) {
  // get current date
  const date = new Date();

  // increment the current date base on 'numOfExpiratoinDay'.
  date.setTime(date.getTime() + numOfExpirationDay * 24 * 60 * 60 * 1000);

  // I don't know what .toUTCString does
  // maybe it converts it to string
  // I will try to figure it out. ⛄
  const expires = `expires=${date.toUTCString()}`;

  // Now this is the thing.
  // This will set a new cookie 😁.
  document.cookie = `${name}=${value};${expires};path=/`;
}

export function getCookie(name) {
  const nameWithEqualSign = `${name}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(';');

  // traverse through cookies
  const value = cookieArray.reduce((acc, cur) => {
    // to trim empty string in the first string index.
    if (cur.charAt(0) === ' ') {
      cur = cur.substr(1);
    }

    // get the exact cookie value.
    if (cur.indexOf(nameWithEqualSign) === 0) {
      return cur.substr(nameWithEqualSign.length, cur.length);
    }

    return acc;
  }, '');

  return value || '';
}

export function delCookie(name) {
  document.cookie = `${name}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}
