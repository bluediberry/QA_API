const { Answer } = require('../models');

exports.createAnswer = async (req, res) => {
  try {
    const { questionId, content } = req.body;
    const answer = await Answer.create({ content, QuestionId: questionId });
    res.status(201).json(answer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error - Failed to create an answer.' });
  }
};

exports.validateAnswer = async (req, res) => {
  try {
    const { answerId } = req.params;
    const answer = await Answer.findByPk(answerId);
    if (!answer) {
      return res.status(404).json({ message: 'Answer not found.' });
    }
    answer.validated = true;
    await answer.save();
    res.status(200).json({ message: 'Answer validated successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error - Failed to validate the answer.' });
  }
};