const pool = require("../config/database");

async function createUser(req, res, next) {
  try {
    const { full_name, email, phone, password_hash } = req.body;

    if (!full_name || !email || !password_hash) {
      return res.status(400).json({
        success: false,
        message: "Full name, email and password hash are required"
      });
    }

    const result = await pool.query(
      "INSERT INTO users (full_name, email, phone, password_hash) VALUES ($1, $2, $3, $4) RETURNING id, full_name, email, phone, role, is_active, created_at",
      [full_name, email, phone, password_hash]
    );

    res.status(201).json({
      success: true,
      data: result.rows[0]
    });
  } catch (error) {
    if (error.code === "23505") {
      return res.status(409).json({
        success: false,
        message: "Email already exists"
      });
    }

    next(error);
  }
}

module.exports = {
  createUser
};