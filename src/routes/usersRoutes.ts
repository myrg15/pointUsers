import { Router } from "express";
import { createUsers, deleteUsersById, getUsersById, getUsers, updateUsersById } from "../controllers/usersController";

const router = Router()

router.get('/', getUsers)
router.post('/', createUsers)
router.put('/:id', updateUsersById)
router.delete('/:id', deleteUsersById)
router.get('/:id', getUsersById)

export { router }