const Sequelize = require('sequelize'),
      sequelize =
        new Sequelize(
          'usersdb',
          'postgres',
          '123456',
          {
            dialect: 'postgres',
            host: 'localhost',
            port: 5432
          }
        );

(async () => {

  try {

    await sequelize.authenticate();

    console.log('Database connection successed');

  } catch (e) {

    console.log(e);

  } finally {

    try {

      sequelize.close();

    } catch (e) {

      console.log(e);
      
    } finally {

    }
  }

})();
