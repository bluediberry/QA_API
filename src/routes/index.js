const express = require('express');
const router = express.Router();
const questionsRouter = require('./questions');
const answersRouter = require('./answers');

router.use('/questions', questionsRouter);
router.use('/answers', answersRouter);

module.exports = router;