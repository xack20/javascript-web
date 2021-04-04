const fs = require('fs');
const dotenv = require('dotenv');
require('colors');

// Load env vars

// Load models
const { User } = require('./models');

dotenv.config({ path: './config/config.env' });
dotenv.config();
const { connectPostgreSQL } = require('./config/db');

// Connect to DB
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
//   useUnifiedTopology: true,
// });

// Read JSON files
const users = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/users.json`, 'utf-8')
);
// console.log(users);
// const todos = JSON.parse(
//   fs.readFileSync(`${__dirname}/_data/todos.json`, 'utf-8')
// );

// Import into DB
const importData = async () => {
  try {
    connectPostgreSQL();
    await User.create(users[0]);
    // await Todo.create(todos);
    console.log('Data Imported...'.green.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

// Delete data
const deleteData = async () => {
  try {
    await User.deleteMany();
    // await Todo.deleteMany();
    console.log('Data Destroyed...'.red.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
  }
};


if (process.argv[2] === "-i") {
  importData();
} else if (process.argv[2] === "-d") {
  deleteData();
}
