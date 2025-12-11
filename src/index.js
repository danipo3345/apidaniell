const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();
const port = 3000

app.set("view engine", "ejs")
app.set("views", "./views")

app.use(bodyParser.json());
/* estas linhas são para leitura de de body.json */
app.use(express.json());
app.use(express.urlencoded());
/* aqui é o acesso exerno do sistema para a api */

app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

//rotas
require('../db/dbconnect')(app);
require('../route/home')(app);
require('../route/getnoticias')(app);
require('../route/getidnoticias')(app);
require('../route/gettiponoticias')(app);
require('../route/delnoticias')(app);
require('../route/postnoticias')(app);
require('../route/putnoticias')(app);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});