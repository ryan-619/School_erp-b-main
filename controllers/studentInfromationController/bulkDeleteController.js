import { getCentralPool } from '../../config/database.js';

export const bulkDeleteStudents = async (req, res) => {

    try {
        const ids = req.body.ids;

        if (!ids || ids.length === 0) {
            return res.json({
                message: 'No IDs Provided'
            });
        }

        const sql = `DELETE FROM students WHERE id IN (?)`;
        const centralPool = getCentralPool();
        const connection = await centralPool.getConnection();
        const [result] = await connection.query(sql, [ids]);
        connection.release();

        res.json({
            message: 'Students Deleted',
            result
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error deleting students',
            error: error.message
        });
    }
};
