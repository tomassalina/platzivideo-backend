const db = require('mongoose');
db.Promise = global.Promise;

async function connect(uri) {
  try {
    await db.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('[db] Conectada con éxito');
  } catch (err) {
    console.log('[db:error]', err);
  }
}

module.exports = connect;
