const server = require('./src/app.js')
const port = process.env.PORT || 3000;
const { conn } = require('./src/db.js');



conn.sync({ force: false }).then(() => {
    server.listen(`${port}`, "0.0.0.0", () => {
       console.log(`listening in ${port}`); // eslint-disable-line no-console
    });
  })

//web server
// const http = require("http")
// const {getCharById} = require("./controlers/getCharById")


// http.createServer((request, response)=>{
// const {url} = request //divide la url por /

// response.setHeader("Access-Control-Allow-Origin", "*");

// if(url.includes("/rickandmorty/character")){
//     const id = url.split('/').at(-1)
//    // const id = url.split('/').pop() creo que es el mismo codigo de arriba
//     getCharById(response, +id)
// }
// })
// .listen(3001)
