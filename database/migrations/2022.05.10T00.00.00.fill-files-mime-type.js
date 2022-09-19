'use strict'

// path: database/migrations

const mimeTypes = require('mime-types');

const BATCH_SIZE = 1000;
const FILE_TABLE = 'files';

async function up(trx) {
  let lastId = 0;
  while (true) {
    const files = await trx
      .select(['id', 'name'])
      .from(FILE_TABLE)
      .where('mime', null)
      .andWhere('id', '>', lastId)
      .orderBy('id', 'asc')
      .limit(BATCH_SIZE);

    const mimesMap = {};
    for (let file of files) {
      const mime = mimeTypes.lookup(file.name) || 'application/octet-stream';
      mimesMap[mime] = mimesMap[mime] || [];
      mimesMap[mime].push(file.id);
    }

    for (let mime of Object.keys(mimesMap)) {
      await trx.update({ mime }).from(FILE_TABLE).whereIn('id', mimesMap[mime]);
    }

    if (files.length < BATCH_SIZE) {
      break;
    }

    lastId = files[files.length - 1].id;
  }
}

async function down() {}

module.exports = { up, down };
