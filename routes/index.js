const router = require('express').Router();
// Import all the routes from the index.js folder
const apiRoutes = require('./api');
const htmlRoutes = require('./html/html-routes');


// add prefic of all `/api` to all of the api routes imported from the `api` directory
router.use('/api', apiRoutes);
router.use('/', htmlRoutes);

router.use((req, res) => {
  res.status(404).send('<h1>😝 404 Error!</h1>');
});

module.exports = router;
