const bcrypt = require("bcrypt");

var the_password = 'abcd1234';

module.exports = {
  up: async (queryInterface, Sequelize) => {


    return queryInterface.bulkInsert('Users', [
    {
      email_address: 'dblitz@byo-energy.com',
      firstName: 'Devin',
      lastName: 'Blitzer',
      password: await bcrypt.hash(the_password, bcrypt.genSaltSync(10)) ,
      mine_id: 1,
      org_id_fk: [1],
      roles: ["Admin", "Employee"],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email_address: 'frank@byo-energy.com',
      firstName: 'Frank',
      lastName: 'Benton',
      password: await bcrypt.hash(the_password, bcrypt.genSaltSync(10)) ,
      mine_id: 1,
      org_id_fk: [1],
      roles: ["Admin", "Employee"],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email_address: 'eric@byo-energy.com',
      firstName: 'Eric',
      lastName: 'Carlos',
      password: await bcrypt.hash(the_password, bcrypt.genSaltSync(10)) ,
      mine_id: 2,
      org_id_fk: [1],
      roles: ["Admin", "Employee"],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email_address: 'al@byo-energy.com',
      firstName: 'Al',
      lastName: 'Kaplan',
      password: await bcrypt.hash(the_password, bcrypt.genSaltSync(10)) ,
      mine_id: 2,
      org_id_fk: [1],
      roles: ["Admin", "Employee"],
      createdAt: new Date(),
      updatedAt: new Date()
    }

    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};

