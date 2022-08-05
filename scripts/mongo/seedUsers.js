// node scripts/mongo/seedUsers.js

const bcrypt = require('bcrypt');
const MongoLib = require('../../lib/users.mongo');
const { config } = require('../../config');
const db = require('../../db');

const users = [
  {
    email: 'root@undefined.sh',
    name: 'ROOT',
    password: config.defaultAdminPassword,
    isAdmin: true,
  },
  {
    email: 'jose@undefined.sh',
    name: 'Jose Maria',
    password: config.defaultUserPassword,
  },
  {
    email: 'maria@undefined.sh',
    name: 'Maria Jose',
    password: config.defaultUserPassword,
  },
];

async function createUser(mongoDB, user) {
  const { name, email, password, isAdmin } = user;
  const hashedPassword = await bcrypt.hash(password, 10);

  const userId = await mongoDB.create({
    name,
    email,
    password: hashedPassword,
    isAdmin: Boolean(isAdmin),
  });

  return userId;
}

async function seedUsers() {
  try {
    const mongoDB = new MongoLib();

    const promises = users.map(async (user) => {
      const userId = await createUser(mongoDB, user);
      console.log('User created with id:', userId);
    });

    await Promise.all(promises);
    return process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

db(
  `mongodb+srv://${config.dbUser}:${config.dbPassword}@cluster0.pdajoye.mongodb.net/?retryWrites=true&w=majority`
);

seedUsers();
