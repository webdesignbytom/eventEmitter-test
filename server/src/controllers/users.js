import dbClient from '../utils/dbClient.js';
import { myEmitter } from '../event/index.js';

export const getAllUsers = async (req, res) => {
    console.log('getAllUsers');
    myEmitter.emit('get-all-users')

    return res.status(200).json({ message: `it works`})
}