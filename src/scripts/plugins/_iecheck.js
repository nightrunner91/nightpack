export default function ieCheck() {
  let ua = window.navigator.userAgent;
  let msie = ua.indexOf("MSIE ");
  let IE;

  // If Internet Explorer, return true
  if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
    return IE = true;
  }

  // If another browser, return false
  else {
    return IE = false;
  }

  return false;
}