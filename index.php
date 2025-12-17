const express = require('express');
const cors = require('cors'); // Quan trọng để Frontend gọi được vào Backend
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/api/data', (req, res) => {
    res.json({ message: "Dữ liệu từ Backend Render!" });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
