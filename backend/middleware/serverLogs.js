const serverLogs = (req, res, next) => {
    console.log({
        method: req.method,
        body: req.body,
        params: req.params,
        url: req.url,
        query: req.query,
    });
    next();
}; 

export default serverLogs;