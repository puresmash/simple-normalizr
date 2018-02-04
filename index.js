// import { normalize, schema } from 'normalizr';
const { normalize, schema } = require('normalizr');

const input = {
  sid: 9527,
  name: 'Nice Shop',
  ownerMeta: {
    pid: 111111,
    name: 'Nice User'
  },
  info: 'You can find anything in our shop'
};

const user = new schema.Entity('user', {}, { idAttribute: 'pid' });
const shop = new schema.Entity('shop',
  { ownerMeta: user },
  { idAttribute: 'sid'}
);
const normalizedData = normalize(input, shop);

console.log(JSON.stringify(normalizedData, null, 2));
