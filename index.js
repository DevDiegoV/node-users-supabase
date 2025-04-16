const express = require('express');
const cors = require('cors');
require('dotenv').config();
const userRoute = require('./routes/routes');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const port = 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.use('/usuarios', userRoute);

app.listen(port, ()=>{
    console.log("Executando localhost:3000");
});
