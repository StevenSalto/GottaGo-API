const db = require('../db');

class Message {
  static async create(sender_id, bathroom_id, content) {
    const result = await db.query(
      `INSERT INTO posts (user_id, bathroom_id, content)
       VALUES ($1, $2, $3) RETURNING *`,
      [sender_id, bathroom_id, content]
    );

    return result.rows;
  }

  static async getChatHistory(bathroom_id) {
    const result = await db.query(
      `SELECT * FROM posts 
       WHERE bathroom_id=$1`,
      [bathroom_id]
    );
    return result.rows;
  }
}

module.exports = Message;
