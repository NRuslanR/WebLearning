const jwt = require('json-web-token');

module.exports.verify = (req, res, next) => {

    let accessToken = req.body.accessToken;

    if (!accessToken)
        return res.status(403).send();

    let payload;

    try
    {
        payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);

        next();
    }

    catch (e)
    {
        return res.status(401).send();
    }
};