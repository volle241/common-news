export default (html = '', resources = [], helmet) => (`
  <!doctype html>
  <html>
  <head>
    <meta charset="utf-8">
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
  
    <meta name="viewport" content="width=device-width,initial-scale=1">
    
    ${resources.styles.map(src => (`<link rel="stylesheet" href="${src}" >`))}
  </head>
  <body>
    <div id="root">${html}</div>
    ${resources.scripts.map(src => (`<script src="${src}"></script>`))}
  </body>
  </html>
`);
