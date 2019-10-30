const router = require('express').Router();
const controllers = require('../controllers');
const auth = require('../utils/auth');
const courseValidator = require('../utils/validator')

router.get('/create', auth(), controllers.expense.get.create);

router.post('/create', auth(), courseValidator, controllers.expense.post.create);

module.exports = router;