cat <<EOF > server.js
const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: process.env.DB_USER || 'rishi_admin',
  host: 'db',
  database: process.env.DB_NAME || 'devops_db',
  password: process.env.DB_PASSWORD || 'rishi_pass',
  port: 5432,
});

pool.query('CREATE TABLE IF NOT EXISTS contacts (id SERIAL PRIMARY KEY, name TEXT, email TEXT, message TEXT)');

app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;
    try {
        await pool.query('INSERT INTO contacts (name, email, message) VALUES (\$1, \$2, \$3)', [name, email, message]);
        res.json({ msg: "Bhai, Rishabhmeta database mein data save ho gaya! ✅" });
    } catch (err) {
        res.status(500).json({ msg: "Database connection error!" });
    }
});

app.listen(3000, () => console.log('Backend running on 3000'));
EOF
