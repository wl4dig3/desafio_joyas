import pool from "../config/db.js";
import format from "pg-format";

const getJoyasLimit = async ({ limit = 5, order_by = "id_asc", page = 1 }) => {
    const [campo, orden] = order_by.split("_");
    const offset = Math.abs((page - 1) * limit);

    const query = format("SELECT * FROM inventario order by %s %s LIMIT %s OFFSET %s", campo, orden, limit, offset);

  const result = await pool.query(query);
  result.rowCount >= 0 ? console.log(`Se encontraron ${result.rowCount} joyas`) : console.log(`No se encontraron joyas`);
console.log('query:::',result);
  return result.rows[0];
};


const getJoyas = async () => {
    const query = 'SELECT * FROM inventario';
    const response = await pool.query(query);
    return response.rows;
};

const getJoyasFiltered = async ({ precio_min, precio_max, categoria, metal }) => {
    let filtros = [];
  
    if (precio_min) filtros.push(`precio >= ${precio_min}`);
    if (precio_max) filtros.push(`precio <= ${precio_max}`);
    if (categoria) filtros.push(`categoria = '${categoria}'`);
    if (metal) filtros.push(`metal = '${metal}'`);
  console.log('filtro array:::',filtros);
    let consulta = "SELECT * FROM inventario";
  
    if (filtros.length > 0) {
      filtros = filtros.join(" AND ");
      consulta += ` WHERE ${filtros}`;
    }
  
    const { rows: inventario } = await pool.query(consulta);
  
    return inventario;
  };

export const models = {
    getJoyasLimit,
    getJoyas,
    getJoyasFiltered
};

