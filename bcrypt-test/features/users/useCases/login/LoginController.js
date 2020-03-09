import bcrypt from 'bcrypt';

export default class LoginController {
  constructor() {}
  async execute(request, response) {
    try {
      const mockUsername = 'user';
      const mockPasswordFromReq = 'password';

      const user = this.getUserByUsername(mockUsername);

      if (!user) {
        // user does not exist
        return response.send(500);
      }

      const passwordIsValid = await this.comparePassword(
        mockPasswordFromReq,
        user.mockPasswordFromPersistence
      );

      if (!passwordIsValid) {
        // password is not valid
        return response.send(500);
      }
      response.send(200);
    } catch (error) {
      return response.send(error);
    }
  }

  getUserByUsername() {
    return {
      mockPasswordFromPersistence:
        '$2b$14$ZDY1iVtqPrnDdV6Nx9OKYOSWSA.oek5X3KOcvCR5LzRcjsn/erWvC'
    };
  }

  comparePassword(passwordFromReq, passwordFromPersistence) {
    return new Promise((resolve, reject) => {
      bcrypt.compare(passwordFromReq, passwordFromPersistence, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }
}
