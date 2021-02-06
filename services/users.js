const MongoLib = require('../lib/users.mongo');
const bcrypt = require('bcrypt');

class UsersService {
  constructor() {
    this.mongoDB = new MongoLib();
  }

  async getUser({ email }) {
    const [user] = await this.mongoDB.getAll({ email });
    return user;
  }

  async createUser({ user }) {
    const { name, email, password } = user;
    const hashedPassword = await bcrypt.hash(password, 10);

    const createdUserId = await this.mongoDB.create({
      name,
      email,
      password: hashedPassword,
    });

    return createdUserId;
  }

  async getOrCreateUser({ user }) {
    const queriedUSer = await this.getUser({ email: user.email });

    if (queriedUSer) {
      return queriedUSer;
    }

    await this.createUser({ user });
    return this.getUser({ email: user.email });
  }
}

module.exports = UsersService;
