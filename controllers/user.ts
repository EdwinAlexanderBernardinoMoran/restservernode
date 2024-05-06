import { Request, Response } from "express";
import User from '../models/user';

export const getUsers = async (req: Request, res: Response) => {
    const users = await User.findAll();
    res.json({
        msg: 'GetUsers',
        users
    })
}

export const getUser = async (req: Request, res: Response) => {

    const { id } = req.params;
    const user = await User.findByPk(id);

    if (user) {
        res.json({
            user: user
        })
    } else {
        res.status(404).json({
            msg: 'No existe'
        })
    }
}

export const postUser = (req: Request, res: Response) => {

    const { body } = req;
    res.json({
        msg: 'PostUser',
        body
    })
}

export const updatetUser = (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'PutUser',
        body,
        id
    })
}

export const deleteUser = (req: Request, res: Response) => {

    const { id } = req.params;
    res.json({
        msg: 'DeleteUser',
        id
    })
}