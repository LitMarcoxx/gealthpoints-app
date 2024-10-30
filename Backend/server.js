const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 3500

// Ruta para la página de bienvenida HTML en /views/index.html
app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/', require('./routes/root'))

// Sirve los archivos estáticos de la aplicación React desde 'client/build'
app.use('/app', express.static(path.join(__dirname, 'client', 'build')))

// Ruta para manejar todas las solicitudes dentro de la aplicación React
app.get('/app/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})

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
