const express = require('express');
const app = express();
const path = require('path');

// Middleware để parse JSON và form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Nếu bạn có frontend build từ React/Vue/... thì phục vụ tại đây
// app.use(express.static(path.join(__dirname, 'client/build')));

// Ví dụ route đơn giản
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Lắng nghe PORT từ biến môi trường (quan trọng với Render)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
