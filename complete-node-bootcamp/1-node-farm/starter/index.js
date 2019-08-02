const fs = require('fs');
const http = require('http');
const url = require('url');

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const tempCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  'utf-8'
);
const tempOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  'utf-8'
);
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/template-product.html`,
  'utf-8'
);

const replaceTemplate = require('./modules/replaceTemplate');

const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true);

  //overview
  if (pathname === '/' || pathname === '/overview') {
    res.writeHead(200, {
      'Content-type': 'text/html'
    });
    const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join('');
    const overview = tempOverview.replace(/{%PRODUCT_CARDS%}/, cardsHtml);

    res.end(overview);

    //product
  } else if (pathname === `/product`) {
    res.writeHead(200, {
      'Content-type': 'text/html'
    });
    const output = replaceTemplate(
      tempProduct,
      dataObj.find(el => el.id == query.id)
    );
    res.end(output);

    //api
  } else if (pathname === '/api') {
    res.writeHead(200, {
      'Content-type': 'application/json'
    });
    res.end(data);

    //404
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'hello-world'
    });
    res.end('<h1>Page not found</h1>');
  }
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Сервер запущен');
});

//НеБлокирующий, асинхронный код
//  fs.readFile('./txt/start.txt', 'utf-8', (err, data) => {
//      fs.readFile(`./txt/${data}.txt`, 'utf-8', (error, data2) => {
//          fs.readFile(`./txt/append.txt`, 'utf-8', (error, data3) => {
//              fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
//                  console.log("Файл был записан");

//              })
//          })
//      })
//  })

//Блокирующий, синхронный код
//  const text = fs.readFileSync('./txt/input.txt', 'utf-8')
//  const textOut = `Thi is what we know about avokado: ${text}.\nCreated on ${Date.now()} `
//  fs.writeFileSync('./txt/output.txt', textOut)
//  console.log("File written");
