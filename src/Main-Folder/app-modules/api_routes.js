const API_URL = 'https://8b5e-122-172-85-46.ngrok-free.app';

export const API_ROUTES = {
  login: `${API_URL}/login`,
  signup: `${API_URL}/addUser`,
  sendEmail: `${API_URL}/send-email`,
  PasswordReset: `${API_URL}/api/reset-password`,
  fetchUserApps: `${API_URL}/user-apps`,
  addFlow: `${API_URL}/create/app`
};
