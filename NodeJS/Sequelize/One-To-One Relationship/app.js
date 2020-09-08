const Sequelize = require("sequelize"),
      sequelize =
        new Sequelize(
          "usersdb",
          "postgres",
          "123456",
          {
            host: 'localhost',
            port: 5432,
            dialect: "postgres",
            define: {
              timestamps: false
            }
          }
        );

const Coach = sequelize.define("Coach", {

  name: {

    type: Sequelize.STRING,
    allowNull: false
  }

});

const Team = sequelize.define("Team", {

  name: {

    type: Sequelize.STRING,
    allowNull: false

  }
});

Coach.hasOne(Team, { onUpdate: 'cascade', onDelete: 'cascade' });

(async () => {

  await sequelize.sync({ force: true });

  await Coach.destroy({ truncate: { cascade: true } });
  await Team.destroy({ truncate: { cascade: true } });

  var createdCoach = await Coach.create({
    name: "Nigmatullin Ruslan"
  });

  var createdTeam = await Team.create({
    name: "Developer Team"
  });

  await createdCoach.setTeam(createdTeam);

  var foundCoach = await Coach.findByPk(createdCoach.id);

  console.log('Found Coach: %j', foundCoach);

  var foundTeam = await foundCoach.getTeam();

  console.log("Found coach's team: %j", foundTeam);

  async function createCoaches(count) {

    var coachAsyncFactory =
      async (item) => {

          return Coach
                  .create({name: `Coach${item}`})
                  .then(coach => {

                    Team
                      .create({ name: `Team${item}`})
                      .then(team => coach.setTeam(team));

                  });

      };

    Array
      .from({ length: count }, (_, i) => i + 1)
      .forEach(coachAsyncFactory);

    return coachAsyncFactory;

  };

  await createCoaches(5);
  
  var allCoaches =
    await Coach.findAll({
      attributes: ['name'],
      include: [
        {
          model: Team,
          attributes: ['name']
        }
      ]
    });

  console.log('All Coaches: %j', allCoaches);

})();
