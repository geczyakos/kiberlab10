// Builds the password reset link included in the reset email, using
// the request's own Host header so the link works correctly across
// all of our regional domains without hardcoding one.

export function buildResetLink(req, resetToken) {
  const host = req.headers.host;
  return `https://${host}/reset-password?token=${resetToken}`;
}