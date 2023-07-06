const express = require('express');
const router = express.Router();
const questionsController = require('../controllers/questionsController');

router.post('/', questionsController.createQuestion);
router.get('/', questionsController.getQuestions);

module.exports = router;