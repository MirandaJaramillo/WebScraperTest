const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");
const PORT = 8000;

const app = express();
const oktaUrl = "https://status.okta.com/";

axios(oktaUrl)
     .then(res => {
        const html = res.data;
        console.log(html);
     })



app.listen(PORT, ()=> console.log( `server running on ${PORT}`));

