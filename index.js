const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

const articlesFile = './articles.json';

let articles = [];
if (fs.existsSync(articlesFile)) {
  articles = JSON.parse(fs.readFileSync(articlesFile, 'utf8'));
  articles = articles.map(article => ({ ...article, comments: article.comments || [] }));
}


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

const storage = multer.diskStorage({
  destination: './public/uploads',
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/forum', (req, res) => {
  console.log(articles);
  res.render('forum', { articles });
});

app.post('/add-article', upload.single('image'), (req, res) => {
  const { title } = req.body;
  const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

  const article = { title, imageUrl };
  articles.push(article);

  fs.writeFileSync(articlesFile, JSON.stringify(articles, null, 2));

  res.redirect('/forum');
});

app.post('/add-comment', (req, res) => {
  const { articleIndex, username, text } = req.body;
  const index = parseInt(articleIndex, 10);
  if (isNaN(index) || index < 0 || index >= articles.length) {
    return res.status(400).send('Invalid article index');
  }
  const comment = { username, text };
  articles[index].comments.push(comment);
  fs.writeFileSync(articlesFile, JSON.stringify(articles, null, 2));
  res.redirect('/forum');
});

app.post('/add-comment', (req, res) => {
  const { articleIndex, username, text } = req.body;
  const index = parseInt(articleIndex, 10);
  if (isNaN(index) || index < 0 || index >= articles.length) {
    return res.status(400).send('Invalid article index');
  }
  const comment = { username, text };
  articles[index].comments.push(comment);
  fs.writeFileSync(articlesFile, JSON.stringify(articles, null, 2));
  res.redirect('/forum');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});