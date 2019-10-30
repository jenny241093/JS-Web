const router = require('express').Router();
const controllers = require('../controllers');
const auth = require('../utils/auth');
const courseValidator = require('../utils/validator')

router.get('/create', auth(), controllers.expense.get.create);

router.post('/create', auth(), courseValidator, controllers.expense.post.create);

router.get('/details/:courseId', auth(), controllers.expense.get.details);

router.get('/edit/:courseId', auth(), controllers.expense.get.edit);

router.post('/edit/:courseId', auth(), courseValidator, controllers.expense.post.edit);

router.get('/delete/:courseId', auth(), controllers.expense.get.delete);

module.exports = router;