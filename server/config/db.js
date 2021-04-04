const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    //  port: env.DATABASE_PORT,
    dialect: 'postgres',
    define: {
      underscored: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
    // operatorsAliases: false,

    // pool: {
    //   max: 5,
    //   min: 0,
    //   acquire: 30000,
    //   idle: 10000
    // }
  }
);

// const connectDB = async () => {
//   const conn = await mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//   });
//   console.log(`MongoDB Connected: ${conn.connection.host}`.yellow.bold);
// };

const connectPostgreSQL = () => {
  sequelize
    .authenticate()
    .then(() => console.log('Postgre Database connected...'.yellow.bold))
    .catch((err) => console.log('ERROR: ' + err));
};

module.exports = {
  // connectDB,
  sequelize,
  Sequelize,
  connectPostgreSQL,
};
