import { Request, Response } from "express";

export const getUsers = (req: Request, res: Response) => {
    res.json({
        msg: 'GetUsers'
    })
}

export const getUser = (req: Request, res: Response) => {

    const { id } = req.params;
    res.json({
        msg: 'GetUser',
        id
    })
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