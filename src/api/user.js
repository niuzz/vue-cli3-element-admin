import fetch from './fetch';

export function login(payload) {
  return fetch({
    url: '/user/login',
    method: 'POST',
    data: payload,
  });
}

export default {};

