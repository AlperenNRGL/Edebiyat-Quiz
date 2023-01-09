const express = require("express");
const app = express();
const port = 5500;

const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'doc')))

app.set('view engine', 'ejs')


app.get('/' , (req, res) => {
    res.render('html/index');
})

app.listen(port,() => {
    console.log(` listening in ${port} port`);
})