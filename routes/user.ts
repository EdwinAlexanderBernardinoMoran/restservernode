import { Router } from "express";
import { deleteUser, getUser, getUsers, postUser, updatetUser } from "../controllers/user";

const router = Router();

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', postUser);
router.put('/:id', updatetUser);
router.delete('/:id', deleteUser);

export default router;