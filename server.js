var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
  `article2` :{
    title: 'Article1 |Venkatasai Mukesh',
    heading: 'Article1',
    date: '15 August 2017',
    content:`<p>This is my first web page content This is my first web page content This is my first web page content This is my first web page content This is my first web page content This is my first web page content</p>`
} ,
  `article3` :{  
    title: 'Article2 |Venkatasai Mukesh',
    heading: 'Article2',
    date: '16 August 2017',
    content:'<p>This is my second web page content This is my second web page content This is my second web page content This is my second web page content This is my second web page content This is my second web page content</p>'
      
  } ,
  `article4` :{
    title: 'Article3 |Venkatasai Mukesh',
    heading: 'Article3',
    date: '17 August 2017',
    content:'<p>This is my third web page content This is my third web page content This is my third web page content This is my third web page content This is my third web page content This is my third web page content</p>'
  }
};
function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    
var htmlTemplate = `
      <html>
         <head>
            <title>
              ${title}
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link href="/ui/style.css" rel="stylesheet" />
          </head>
    <body>
        <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
          ${date}
        </div>
        <div>
        ${content}
        </div>
    </div>
  </body>
</html>
    `;
    return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req, res){
//articleName == article2
//articles{articleName} =={} content object for article2
var articleName =req.params.articleName;
     res.send(createTemplate(articles[articleName]));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
