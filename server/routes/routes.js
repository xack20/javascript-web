const home = require('./home');
const auth = require('./auth');
const users = require('./users');
// const todos = require('./todos');
// const offices = require('./offices');
// const departments = require('./departments');
// const designations = require('./designations');
// const jobs = require('./jobs');

// const attendances = require('./attendances');

module.exports = (app) => {
  app.use('/api/v1', home);
  app.use('/api/v1/auth', auth);
  app.use('/api/v1/users', users);
  // app.use('/api/v1/todos', todos);
  // app.use('/api/v1/offices', offices);
  // app.use('/api/v1/departments', departments);
  // app.use('/api/v1/designations', designations);
  // app.use('/api/v1/jobs', jobs);
  // app.use('/api/v1/attendances', attendances);
};
