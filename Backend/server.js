const express = require('express')
const path = require('path')
const app = express()
const mysql = require('mysql')
const PORT = process.env.PORT || 3500

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'healthpoints'
    
})

// Ruta para la página de bienvenida HTML en /views/index.html
app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/', express.static(path.join(__dirname, 'views')));

app.use('/', require('./routes/root'))

// Manejo de errores 404 para cualquier otra ruta
app.all('*', (req, res) => {
    res.status(404)
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    } else if (req.accepts('json')) {
        res.json({ message: "404 Not Found" })
    } else {
        res.type('txt').send('404 Not Found')
    }
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
