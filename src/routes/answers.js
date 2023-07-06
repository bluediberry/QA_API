const express = require('express');
const router = express.Router();
const answersController = require('../controllers/answersController');

router.post('/', answersController.createAnswer);
router.put('/:answerId/validate', answersController.validateAnswer);

module.exports = router;