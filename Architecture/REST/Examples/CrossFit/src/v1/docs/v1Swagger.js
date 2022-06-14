const
    swaggerJSDoc = require('swagger-jsdoc'),
    swaggerUi = require('swagger-ui-express');

const
    options = {
        definition: {
            openapi: "3.0.0",
            info: {
                title: "CrossFit WOD API",
                version: "1.0.0"
            }
        },
        apis: [`${__dirname}/**/*.js`]
    },
    swaggerSpec = swaggerJSDoc(options),
    swaggerDocs = (app, port) => {

        const
            swaggerUiOptions = {
                customSiteTitle: 'CrossFit WOD API Docs'
            };
        
        app.use(
            '/api/v1/docs',
            swaggerUi.serve,
            swaggerUi.setup(swaggerSpec, swaggerUiOptions)
        );

        app.get('/api/v1/docs.json', (req, res) => {

            res.setHeader('Content-Type', "application/json");
            res.send(swaggerSpec);
        });

        console.log(`Documentation can be accessed on http://localhost:${port}/api/v1/docs`);
    };

module.exports = { v1SwaggerDocs: swaggerDocs };