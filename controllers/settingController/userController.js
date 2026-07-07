import UserModel from "../../models/settingModels/userModel.js";


export const getUsers = (
    req,
    res
) => {

    UserModel.getAll(
        (err, users) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    message: "Failed to fetch users",
                    error: err.message
                });
            }

            res.status(200).json({
                success: true,
                total: users.length,
                data: users
            });
        }
    );

};



export const getUsersByType = (
    req,
    res
) => {

    const { type } = req.params;

    UserModel.getByType(
        type,
        (err, users) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    message:
                        "Failed to fetch users",
                    error: err.message
                });
            }

            res.status(200).json({
                success: true,
                data: users
            });
        }
    );
};



export const createUser = (
    req,
    res
) => {

    UserModel.create(
        req.body,
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    message:
                        "Failed to create user",
                    error: err.message
                });
            }

            res.status(201).json({
                success: true,
                message:
                    "User created successfully",
                userId:
                    result.insertId
            });
        }
    );
};



export const updateUser = (
    req,
    res
) => {

    const { id } = req.params;

    UserModel.update(
        id,
        req.body,
        (err) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    message:
                        "Failed to update user",
                    error: err.message
                });
            }

            res.status(200).json({
                success: true,
                message:
                    "User updated successfully"
            });
        }
    );
};



export const updateUserStatus = (
    req,
    res
) => {

    const { id } = req.params;

    const { status } =
        req.body;

    UserModel.updateStatus(
        id,
        status,
        (err) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    message:
                        "Failed to update status",
                    error: err.message
                });
            }

            res.status(200).json({
                success: true,
                message:
                    "User status updated"
            });
        }
    );
};



export const deleteUser = (
    req,
    res
) => {

    const { id } = req.params;

    UserModel.delete(
        id,
        (err) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    message:
                        "Failed to delete user",
                    error: err.message
                });
            }

            res.status(200).json({
                success: true,
                message:
                    "User deleted successfully"
            });
        }
    );
};