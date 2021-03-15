const db = require('../data/dbConfig');

module.exports = {
  get,
  getById,
  create,
  update,
  remove,
};

function get() {
  return db('accounts');
}

function getById(id) {
  return db('accounts').where({ id }).first();
}

async function create(account) {
  const [id] = await db('accounts').insert(account, ['id']);
  return getById(id);
}

async function update(id, account) {
  await db('accounts').where('id', id).update(account);
  return getById(id);
}

async function remove(id) {
  const deletedAccount = await getById(id);
  await db('accounts').where({ id }).del();
  return deletedAccount;
}
