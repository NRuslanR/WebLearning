const Sequelize = require("sequelize"),
      sequelize =
        new Sequelize(
          "usersdb",
          "postgres",
          "123456",
          {
            dialect: "postgres",
            host: 'localhost',
            port: 5432
          }
        );

const Product = sequelize.define('Product', {

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

  price: {

    type: Sequelize.INTEGER,
    allowNull: false
  }

});

const Company = sequelize.define('Company', {

  name: {

    type: Sequelize.STRING,
    allowNull: false

  }
});

Company.hasMany(Product, { onUpdate: 'cascade', onDelete: 'cascade' });

(async () => {

  await sequelize.authenticate();

  console.log(await sequelize.sync({ force: true }));

  await Company.destroy({ truncate: { cascade: true }});

  var company = await Company.create({ name: "UMZ" });

  console.log(
    await Product.create({
      name: "Product A",
      price: 532,
      CompanyId: company.id
    })
  );

  console.log(
    await company.createProduct({ name: "Product B", price: 234 })
  );

  console.log(
    await Product.findAll({ raw: true })
  );

  var foundCompany =
    await Company.findByPk(company.id);

  console.log('found company:');
  console.log(foundCompany.dataValues);

  console.log("found company's products");

  console.log(
    await foundCompany.getProducts({ raw: true })
  );

  await sequelize.close();

})();
