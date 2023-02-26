import EventEmitter from 'events';
import dbClient from '../utils/dbClient.js';

class MyEventEmitter extends EventEmitter {}
export const myEmitter = new MyEventEmitter();

myEmitter.on('get-all-users', async () => {
  console.log('EVEENEENNET');

  await dbClient.event.create({
    data: {
      type: 'USER',
    },
  });
});
