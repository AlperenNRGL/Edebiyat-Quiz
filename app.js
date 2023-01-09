const express = require("express");
const app = express();
const port = process.env.PORT || 5500;

const path = require('path')
app.use('/static', express.static('doc'))
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')


app.get('/' , (req, res) => {
    res.render('html/index');
})

app.listen(port,() => {
    console.log(`listening on ${port} port`);
})