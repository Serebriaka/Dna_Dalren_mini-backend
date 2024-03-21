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
app.post('/setItem', (req, res) => {
    addToItems(req.body)
    res.send('Данные успешно сохранены');
});
app.delete('/delItem', (req, res) => {
    delItems(req.body)
    res.send('Данные успешно сохранены');
});

app.get('/getItems', (req, res) => {
    // Получение данных
    const jsonData = fs.readFileSync('items.json', 'utf8');
    const data = JSON.parse(jsonData)
    res.send(data);
});
app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});

const addToItems = (item) => {
    // Прочитаем данные из файла data.json
    const jsonData = fs.readFileSync('items.json', 'utf8');
    const data = JSON.parse(jsonData)

    data[item.category].push(item)
    const updatedJsonData = JSON.stringify(data);
    // Запишем обновленные данные обратно в файл data.json
    fs.writeFileSync('items.json', updatedJsonData);

    console.log(`Новые данные успешно добавлены в массив ${item.category}` );
};
const delItems = (obj) => {
    const jsonData = fs.readFileSync('items.json', 'utf8');
    const data = JSON.parse(jsonData)
    let itemIndex = data['shields'].findIndex(item => item.id === "rQvqDvA9BuMW1Du")
    if(itemIndex !== -1) {
        data['shields'].splice(itemIndex, 1)
        const updatedJsonData = JSON.stringify(data);
        fs.writeFileSync('items.json', updatedJsonData);
    }
}





