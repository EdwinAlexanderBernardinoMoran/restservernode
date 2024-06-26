import { DataTypes } from "sequelize";
import db from "../db/connection";

const User = db.define('User', {
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.INTEGER
    }
})

export default User;