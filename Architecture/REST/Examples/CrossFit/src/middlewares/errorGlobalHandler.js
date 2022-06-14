const
    errorGlobalHandler = (err, req, res, next) => {

        res.status(500).json({
            data: {
                errors: [
                    err.message
                ]
            }
        })
    };

module.exports = errorGlobalHandler;