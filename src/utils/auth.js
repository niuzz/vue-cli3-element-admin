export function getAuth() {
  return sessionStorage.getItem('Auth');
}

export function setAuth() {
  sessionStorage.setItem('Auth');
}

export default {};
