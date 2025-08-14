// Gestion de l'authentification côté client
const auth = {
  isAuthenticated: false,
  token: null,

  login(token) {
    this.isAuthenticated = true;
    this.token = token;
    localStorage.setItem('auth_token', token);
  },

  logout() {
    this.isAuthenticated = false;
    this.token = null;
    localStorage.removeItem('auth_token');
  },

  initialize() {
    const token = localStorage.getItem('auth_token');
    if (token) {
      this.isAuthenticated = true;
      this.token = token;
    }
    return this.isAuthenticated;
  },

  getAuthHeader() {
    return this.token ? { 'Authorization': `Bearer ${this.token}` } : {};
  }
};

// Initialiser au chargement
auth.initialize();

export default auth;