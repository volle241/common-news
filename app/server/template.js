export default (html = '', resources = [], helmet, reduxState) => (`
  <!doctype html>
  <html>
  <head>
    <meta charset="utf-8">
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
  
    <meta name="viewport" content="width=device-width,initial-scale=1">
    
    ${resources.styles.map(src => (`<link rel="stylesheet" href="${src}" >`))}
    
    <link href="https://fonts.googleapis.com/css?family=Questrial&display=swap" rel="stylesheet">
  </head>
  <body>
    <section id="root">${html}</section>
    <script type="text/javascript">window.__REDUX_STATE__ = '${reduxState}';</script>
    ${resources.scripts.map(src => (`<script src="${src}"></script>`))}
  </body>
  </html>
`);
