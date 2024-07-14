import pg from "pg";
import format from "pg-format";

const getJoyas = async ({limit = 5, order_by = "id_asc"}) => {
    const [campo, orden] = order_by.split("_");
    const query = format("SELECT * FROM joyas ORDER BY %s %s LIMIT %s", campo, orden, limit);
    try {
        const result = await pool.query(query);
        return result.rows;         
    } catch (error) {
        console.log('falló la consulta', error);
    };
};

export const models = {
    getJoyas
};

