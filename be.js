// Ví dụ nội dung trong file be.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// Sửa đoạn này để thay đổi hiển thị
app.get('/', (req, res) => {
    res.json({
        status: "Success",
        message: "Backend đã được cập nhật nội dung mới!",
        author: "Quang Nguyễn",
        timestamp: new Date()
    });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});