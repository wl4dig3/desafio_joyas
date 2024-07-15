import { models } from "../models/queries.js";

const home = async (req, res) => {
    res.send("Welcome to my API");
};

// const getJoyasLimit = async (req, res) => {
//     try {
//       const { limit, order_by } = req.query;
//       const result = await models.getJoyasLimit( {limit, order_by} );
//       res.status(200).json({joyas: result}); 
//     } catch (error) {
//       res.status(500).json({ error: error.message }); 
//     }
    
// };

// export const controllers = {
//     home,
//     getJoyasLimit
// }; 
const getJoyasLimit = async (req, res) => {
    const { limit } = req.params;
    const { order_by } = req.query;
    try { 
        const result = await models.getJoyasLimit({limit, order_by});
        res.status(200).json({result: result});
    } catch (error) {
        console.log('falló la consulta',error.message);
    }
};

const prepararHATEOAS = (joyas) => {
    const results = joyas.map((m) => {
        return {
            name: m.nombre,
            href: `/joyas/joya/${m.id}`,
        }
    }).slice(0, 9)
    const total = joyas.length;
    const HATEOAS = {

        total,
        results
    }
    return HATEOAS
};

const getJoyas = async (req, res) => {
    try {
        const queryStrings = req.query;
        const joyas = await models.getJoyas(queryStrings);
        const HATEOAS =  prepararHATEOAS(joyas)
        const result = await models.getJoyas();
        res.json(HATEOAS);
        res.json(result);
    } catch (error) {
        console.log('falló la consulta',error.message);
    }
};

const getjoyasFilteredController = async (req, res) => {
    
    try {
        const query = req.query;
        const result = await models.getJoyasFiltered(query);
        return res.status(200).json({result});
    } catch (error) {
        console.log('falló la consultaZZZ de filtro',error.message);
    }
}



export const controllers = {
    getJoyasLimit,
    getJoyas,
    home,
    getjoyasFilteredController
};