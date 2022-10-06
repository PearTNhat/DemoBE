import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { engine } from 'express-handlebars';
import morgan from 'morgan';
const app = express()
const port = 4000
//xử lí lỗi __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// HTTP logger
app.use(morgan('combined'))
//Template engine
app.engine('hbs', engine({
  extname:'.hbs',
}));
app.set('view engine', 'hbs');
app.set('views', 'src/resource/views');
//
// app.use(express.static(path.join(__dirname,'/public'))) //c1
//thực hiện các file tỉnh có thể mở trên web
app.use(express.static('src/public')) //c2

//
app.get('/', (req, res) => {
  res.render('home');
})
app.get('/news', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})