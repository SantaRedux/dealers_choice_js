const express = require("express");
const morgan = require("morgan");
const paintingBank = require("./paintingBank.js");

const app = express();

app.use(morgan('dev'));

app.use(express.static('./public'));

app.get("/", (req, res) => {
    const paintings = paintingBank.list();

    const html = `<!DOCTYPE html>
    <html>
        <head>
            <title>
                Early Picasso
            </title>
            <link rel="stylesheet" href="./style.css">
        </head>

        <body>
            <div class="paintings">
            <header>
                Early Picasso
            </header>
            
            <ol>${paintings.map(painting => `
                <div class="painting-list">
                    <p>
                    <span class="each-painting">${painting.id}. </span>
                    <a href="/paintings/${painting.id}">${painting.title}</a>
                    <small>(${painting.year})</small>
                    </p>
                </div>`
        ).join('')}
            </ol>
            </div>
        </body>
    </html>`;

    res.send(html);
});

app.get('/paintings/:id', (req, res) => {
    const id = req.params.id;
    const painting = paintingBank.find(id);

    if (!painting.id) {
        process.stdout.write('404: Not Found');
        throw new Error('Not Found');
    }

    const html = `<!DOCTYPE html>
    <html>
      <head>
            <title>
                ${painting.title}
            </title>
            <link rel="stylesheet" href="../style.css">
        </head>

      <body>
      <div class="paintings">
        <header>
          ${painting.title}
        </header>
          <div class="each-painting">
            <p>
              <img src="/${painting.id}.jpg"/>
              <small>Pablo Picasso | ${painting.year}</small>
            </p>

            <p>
              ${painting.caption}
            </p>

            <small>
                <a href="/">Return to menu</a>
            </small>
          </div>
        </div>
      </body>
    </html>`

    res.send(html);
});


const PORT = 1338;

app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
});