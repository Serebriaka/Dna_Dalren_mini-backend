const fs = require('fs');
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
// const saveItems = () => {
//     const data = {
//         age: [30, 23, 23, 55]
//     };
//     const jsonData = JSON.stringify(data);
//     fs.writeFileSync('data.json', jsonData);
//     console.log('Данные успешно сохранены в файл data.json');
// };

// saveItems();

const addToItems = () => {
    // Прочитаем данные из файла data.json
    const jsonData = fs.readFileSync('data.json', 'utf8');
    const data = JSON.parse(jsonData);
    console.log(data, 'json data')
    data.allItems['armors'].push(222)
    const updatedJsonData = JSON.stringify(data);
    // Запишем обновленные данные обратно в файл data.json
    fs.writeFileSync('data.json', updatedJsonData);

    console.log('Новые данные успешно добавлены в массив age');
};

// Пример добавления новых данных в массив age
addToItems();



