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

  await User.destroy({ truncate: true });

  console.log('User rows removed');

  async function addUsers(users)
  {
    var userPromises = [];

    users.forEach(user => userPromises.push(User.create(user)));

    return Promise.all(userPromises);
  }

  await addUsers(
    [
      {
        name: "Nigmatullin Ruslan",
        age: 25
      },

      {
        name: "Nikolay Ermakov",
        age: 57
      },

      {
        name: "Alexandr Lavrentiev",
        age: 32
      }
    ]
  );

  console.log('Users:');

  var foundUsers = await User.findAll({ raw: true });

  console.log(foundUsers);

  console.log('findAll (Nikolay Ermakov):');

  console.log(await User.findAll({ where: { name: "Nikolay Ermakov" }, raw: true }));

  console.log('find by pk=' + foundUsers[2].id + ':');

  console.log(await User.findByPk(foundUsers[2].id));

  console.log('find one ruslan:');

  console.log(await User.findOne({ where: { name: foundUsers[0].name }, raw: true }));

  console.log('update ruslan age=26');

  console.log(
    await User.update(
      { age: 26 },
      { where: { id: foundUsers[0].id }}
    )
  );

  console.log(await User.findByPk(foundUsers[0].id, { raw: true }));

  console.log('destroy nikolay ermakov age=57');

  console.log(
    await User.destroy(
      {
        where: {
          name: 'Nikolay Ermakov',
          age: 57
        }
      }
    )
  );

  console.log('find all:');

  console.log(await User.findAll({ raw: true }));

  await sequelize.close();

  console.log('Database connection closed');

})();
