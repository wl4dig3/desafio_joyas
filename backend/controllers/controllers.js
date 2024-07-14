import { models } from "../models/queries.js";

const home = async (req, res) => {
    res.send("Welcome to my API");
};

const getJoyas = async (req, res) => {
    const { limit } = req.params;
    const { order_by } = req.query;
    try {
    const result = await models.getJoyas({limit, order_by});
    res.json(result);
    } catch (error) {
        console.log('falló la consulta', error);
    }
};

export const controllers = {
    home,
    getJoyas
};