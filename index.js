const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')


app.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname,'views','principal.html'))
    res.render('principal')
})

let port = 3000;

app.listen(port, () => {
    console.log(`EL servedor esta escuchando en el puerto ${port}`)

})
