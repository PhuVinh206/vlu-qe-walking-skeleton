/**
 * Kiểm tra thông tin đăng nhập
 * @param {string} user 
 * @param {string} pass 
 * @returns {boolean}
 */
function login(user, pass) {
  if (user === 'admin' && pass === '123') {
    return true;
  }
  return false;
}

// Xuất hàm để Jest trong môi trường Node.js có thể import
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { login };
}
