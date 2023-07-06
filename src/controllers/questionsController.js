const { Question } = require('../models');

exports.createQuestion = async (req, res) => {
  try {
    const { title, content } = req.body;
    const question = await Question.create({ title, content });
    res.status(201).json(question);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error- Failed to create a question.' });
  }
};

exports.getQuestions = async (req, res) => {
  try {
    const questions = await Question.findAll();
    res.status(200).json(questions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error - Failed to retrieve questions.' });
  }
};