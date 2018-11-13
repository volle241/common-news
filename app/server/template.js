export default (html = '', resources = [], helmet) => (`
  <!doctype html>
  <html>
  <head>
    <meta charset="utf-8">
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
  
    <meta name="viewport" content="width=device-width,initial-scale=1">
    
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,500i,700,700i">
    
    ${resources.styles.map(src => (`<link rel="stylesheet" href="${src}" >`))}
  </head>
  <body>
    <div id="root">${html}</div>
    ${resources.scripts.map(src => (`<script src="${src}"></script>`))}
  </body>
  </html>
`);
