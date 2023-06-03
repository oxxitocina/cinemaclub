export function checkAuthorization() {
  const isUserSignedIn =
    localStorage.getItem("signedIn") ??
    localStorage.setItem("signedIn", "false");

  if (isUserSignedIn === "false") {
    return false;
  }
}
