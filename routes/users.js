import express from "express";

import {
    getUsers,
    createUser, 
    getSelectedUser,
    deleteUser,
    patchUser
} from "../controllers/users.js";

const router = express.Router();

router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getSelectedUser);

router.delete('/:id', deleteUser);

router.patch('/:id', patchUser)

export default router;