import pool from "../config/db.js";
import format from "pg-format";

const getJoyasLimit = async ({ limit = 5, order_by = "id_asc", page = 1 }) => {
    const [campo, orden] = order_by.split("_");
    const offset = Math.abs((page - 1) * limit);

    const query = format("SELECT * FROM inventario order by %s %s LIMIT %s OFFSET %s", campo, orden, limit, offset);

  const result = await pool.query(query);
  result.rowCount >= 0 ? console.log(`Se encontraron ${result.rowCount} joyas`) : console.log(`No se encontraron joyas`);

};


// const getJoyasLimit = async ({ limit = 5, order_by = "id_asc" }) => {
//     const [campo, orden] = order_by.split("_");
//     const query = format('SELECT * FROM inventario order by %s %s limit %s', campo, orden, limit);
//     try {
//         const result = await pool.query(query);
//     return result.rows;
//     } catch (error) {
//         console.log('falló la consulta',error.message);
//     }
// };

const getJoyas = async () => {
    const query = 'SELECT * FROM inventario';
    const response = await pool.query(query);
    return response.rows;
}

export const models = {
    getJoyasLimit,
    getJoyas,
};

