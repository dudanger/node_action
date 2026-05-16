const express = require('express');
const app = express();
const PORT = 3000;

// 一个简单路由
app.get('/', (req, res) => {
    res.send('Hello from Docker!');
});

// 关键：监听 0.0.0.0，且永不退出
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});