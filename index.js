var express = require('express');
var app = express();
var jsonParser = require('body-parser').json();

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.listen(3000, () => console.log('Server started'))
app.get('/', (req, res) => res.render('home'));

app.get('/try', (req, res) => res.send('Hello axios'));
app.post('/axios', jsonParser, (req, res) => {
  res.send(req.body);
});
