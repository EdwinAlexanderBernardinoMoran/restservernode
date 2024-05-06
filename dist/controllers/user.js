"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updatetUser = exports.postUser = exports.getUser = exports.getUsers = void 0;
const getUsers = (req, res) => {
    res.json({
        msg: 'GetUsers'
    });
};
exports.getUsers = getUsers;
const getUser = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'GetUser',
        id
    });
};
exports.getUser = getUser;
const postUser = (req, res) => {
    const { body } = req;
    res.json({
        msg: 'PostUser',
        body
    });
};
exports.postUser = postUser;
const updatetUser = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'PutUser',
        body,
        id
    });
};
exports.updatetUser = updatetUser;
const deleteUser = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'DeleteUser',
        id
    });
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=user.js.map