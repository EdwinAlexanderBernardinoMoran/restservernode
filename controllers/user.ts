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

export const postUser = async (req: Request, res: Response) => {

    const { body } = req;

    try {
        const user = User.build(body);
        await user.save();
        res.json({user})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}

export const updatetUser = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({
                msg: 'No  existe un usuario con el id' + id
            });
        }

        await user.update(body);
        res.json({user})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}

export const deleteUser = (req: Request, res: Response) => {

    const { id } = req.params;
    res.json({
        msg: 'DeleteUser',
        id
    })
}