const express = require('express');
const router = express.Router();

const Message = require('../models/message');

router.post('/create', async (req, res) => {
  try {
    const { sender_id, bathroom_id, content } = req.body;
    const newPost = await Message.create(sender_id, bathroom_id, content);
    return res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while sending the message' });
  }
});

router.get('/get/:bathroom_id', async (req, res) => {
  try {
    const { bathroom_id } = req.params;
    const bathroomPosts = await Message.getChatHistory(bathroom_id);
    return res.status(200).json(bathroomPosts);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching chat history' });
  }
});

module.exports = router;
