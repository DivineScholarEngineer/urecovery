export const AUTH_KEY = 'urecover_auth';

export function isLoggedIn() {
  try {
    return !!JSON.parse(localStorage.getItem(AUTH_KEY));
  } catch (e) {
    return false;
  }
}

export function login(payload = { loggedIn: true }) {
  try {
    localStorage.setItem(AUTH_KEY, JSON.stringify(payload));
  } catch (e) {}
}

export function logout() {
  try {
    localStorage.removeItem(AUTH_KEY);
  } catch (e) {}
  // Always go back to main page
  window.location.href = "/";
}
