// frontend/src/api/client.js
function jsonFetch(url, { method = 'GET', body } = {}) {
  const headers = { 'Content-Type': 'application/json' };
  return fetch(url, {
    method,
    headers,
    credentials: 'include', // send session cookie
    body: body ? JSON.stringify(body) : undefined,
  }).then(async (res) => {
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      const err = new Error(data?.error || 'Request failed');
      err.status = res.status;
      err.data = data;
      throw err;
    }
    return data;
  });
}

export const api = {
  me: () => jsonFetch('/api/me'),
  login: ({ username, password }) =>
    jsonFetch('/api/login', { method: 'POST', body: { username, password } }),
  signup: ({ username, email, password, first_name, last_name }) =>
    jsonFetch('/api/signup', { method: 'POST', body: { username, email, password, first_name, last_name } }),
  logout: () => jsonFetch('/api/logout', { method: 'POST' }),
  updateProfile: (payload) => jsonFetch('/api/profile', { method: 'POST', body: payload }),
  changePassword: ({ current_password, new_password, confirm_password }) =>
    jsonFetch('/api/password', { method: 'POST', body: { current_password, new_password, confirm_password } }),
};
