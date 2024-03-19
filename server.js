
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
let data = { message: "5" }
app.post('/saveData', (req, res) => {
    // Обработка данных и сохранение
    data.message = req.body
    res.send('Данные успешно сохранены');
});
app.get('/getData', (req, res) => {
    // Получение данных
    res.send(data);
});
app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
