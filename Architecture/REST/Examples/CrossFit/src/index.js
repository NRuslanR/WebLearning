const
    express = require("express"),
    app = express(),
    PORT = process.env.PORT || 3000,
    v1WorkoutRouter = require("./v1/routes/workoutRoutes"),
    v1MemberRouter = require("./v1/routes/memberRoutes"),
    bodyParser = require('body-parser'),
    errorGlobalHandler = require('./middlewares/errorGlobalHandler'),
    { v1SwaggerDocs } = require('./v1/docs/v1Swagger');
    
app.use(bodyParser.json());
app.use("/api/v1/workouts", v1WorkoutRouter);
app.use("/api/v1/members", v1MemberRouter);
app.use(errorGlobalHandler);

app.listen(PORT, () => {

    console.log(`API listening on port ${PORT}`);

    v1SwaggerDocs(app, PORT);
});