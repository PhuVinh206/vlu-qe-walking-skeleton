const { login } = require('./login');

describe('Kiểm thử hàm login', () => {
  test('Trả về true khi user="admin" và pass="123"', () => {
    expect(login('admin', '123')).toBe(true);
  });

  test('Trả về false khi sai username', () => {
    expect(login('userTest', '123')).toBe(false);
  });

  test('Trả về false khi sai password', () => {
    expect(login('admin', 'wrong_pass')).toBe(false);
  });

  test('Trả về false khi cả user và pass đều sai', () => {
    expect(login('userTest', 'wrong_pass')).toBe(false);
  });

  test('Trả về false khi bỏ trống thông tin', () => {
    expect(login('', '')).toBe(false);
  });
});
