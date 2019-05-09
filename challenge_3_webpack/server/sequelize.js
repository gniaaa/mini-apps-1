const Sequelize = require('sequelize');

const sequelize = new Sequelize('checkout', 'root', 'eugenia', {
  host: 'localhost',
  dialect: 'mysql'
})

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

const Address = sequelize.define('address', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  line1: {
    type: Sequelize.STRING,
    allowNull: false
  },
  line2: {
    type: Sequelize.STRING,
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false
  },
  zipcode: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phoneNumber: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

const Payment = sequelize.define('payment', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  creditCardNumber: {
    type: Sequelize.STRING,
    allowNull: false
  },
  expiryMonth: {
    type: Sequelize.STRING,
    allowNull: false
  },
  expiryYear: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cvv: {
    type: Sequelize.STRING,
    allowNull: false
  },
  billingZipcode: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

User.hasMany(Address);
User.hasMany(Payment);

sequelize.sync({ force: true })
  .then(() => {
    console.log(`Database & tables created!`)
  });

module.exports = {
  User,
  Address,
  Payment
};