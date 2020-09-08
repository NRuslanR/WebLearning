const Sequelize = require('sequelize'),
      sequelize =
        new Sequelize(
          "usersdb",
          "postgres",
          "123456",
          {
            host: "localhost",
            port: 5432,
            dialect: "postgres"
          }
        );

(async () => {

  await sequelize.authenticate();

  const User =
    sequelize.define(
      'user',
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },

        name: {
          type: Sequelize.STRING,
          allowNull: false
        },

        age: {
          type: Sequelize.INTEGER,
          allowNull: false
        }
      }
    );

  console.log(await sequelize.sync());

})();
