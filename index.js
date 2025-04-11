import express from 'express'

const app = express()
const port=3000;

const usuario={ "nombre":"Ana", "edad": 25 }
const productos=["Mouse", "Teclado", "Monitor"];
const materias=[ { "nombre": "Matemática" }, { "nombre": "Lengua" } ] 

app.get('/', (req, res) => {
  res.send('Bienvenido a mi servidor')
})

app.listen(port, ()=>{
    console.log(`Listening on http://localhost:${port}`)
})

app.get('/saludo', (req, res) => {
    res.send('¡Hola, mundo!')
})

app.get('/numero', (req, res) => {
    res.send('42')
})

app.get('/usuario', (req, res) => {
    res.json(usuario)
})

app.get('/productos', (req, res) => {
    res.json(productos)
})

app.get('/materias', (req, res) => {
    res.json(materias)
})