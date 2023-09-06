//se requieren los modulos de express, sus metodos con app y path
const express = require('express');
const app = express();
const path = require('path');
//se levanta el servidor
app.listen(3030, () => {
    console.log('Servidor corriendo')
});
//se rutean los archivos html 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
});
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'))
});
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'))
});
//se enlazan los estilos e imagenes
app.use(express.static('public/'));