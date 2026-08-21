// Builds the session cookie sent after a successful login.

export function buildSessionCookie(sessionToken) {
  return {
    name: 'session',
    value: sessionToken,
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  };
}