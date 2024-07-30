import express from 'express'; 
import { getAllUsers } from '../controllers/users'; 
import router from '.';

const createRouter = () => {
    const routerInstance = express.Router();
    routerInstance.get('/users', getAllUsers);
    return routerInstance;
};

export default createRouter();
