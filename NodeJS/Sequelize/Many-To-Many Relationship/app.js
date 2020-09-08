const Sequelize = require('sequelize'),
      sequelize =
        new Sequelize(
          'usersdb',
          'postgres',
          '123456',
          {
            dialect: 'postgres',
            host: 'localhost',
            port: 5432,
            define: {
              timestamps: false
            }
          }
        );

const Student = sequelize.define("Student", {

  name: {

    type: Sequelize.STRING,
    allowNull: false

  },

  greetingDate: {

    type: Sequelize.DATE,
    allowsNull: false

  }
});

const Course = sequelize.define('Course', {

  name: {

    type: Sequelize.STRING,
    allowNull: false

  }
});

const Students_Course = sequelize.define('Students_Course', {

  grade: {

    type: Sequelize.INTEGER,
    allowsNull: true

  }

});

Student.belongsToMany(Course, { through: Students_Course });
Course.belongsToMany(Student, { through: Students_Course });

async function createStudents(count) {

  var factory = async (s) => {

      return Student.create({
        name: `Student${s}`,
        greetingDate: new Date()
      });
  };

  Array.from({ length: count }, (_, i) => i + 1).forEach(factory);

  return factory;
}

async function createCourses(count) {

  var factory = async (c) => {

      return Course.create({
        name: `Course${c}`
      });
  };

  Array.from({ length: count }, (_, i) => i + 1).forEach(factory);

  return factory;
}

async function findCourses(numbers) {

  var coursePromises = [];

  for (number of numbers)
    coursePromises.push(Course.findOne({ where: { name: `Course${number}` }}));

  return Promise.all(coursePromises);

}

(async () => {

  await sequelize.sync({ force: true });

  await Students_Course.destroy({ truncate: { cascade: true }});
  await Student.destroy({ truncate: { cascade: true } });
  await Course.destroy({ truncate: { cascade: true } });

  await createStudents(5);
  await createCourses(8);

  var foundStudent = await Student.findOne({ where: { name: 'Student3' }});

  console.log('found student: %j', foundStudent);
  
  (await findCourses([3, 5, 7]))
    .forEach(
      course => foundStudent.addCourse(course, { through: { grade: 5 }})
    );

  console.log('All Students:');

  await Student
          .findAll({ where: true })
          .then(student => {

            console.log('Student: %j', student);

            student
              .getCourses()
              .then(courses => {

                console.log('Courses: %j', courses);

              })

          });

})();
