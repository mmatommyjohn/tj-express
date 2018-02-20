const express = require("express");
const favicon = require("serve-favicon");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

const faviconPath = path.join(__dirname, "images", "favicon.png");
app.use(favicon(faviconPath));

const homePath = path.join(__dirname, "pages", "home.html");
app.get("/", (req, res) => res.sendFile(homePath));

const categoryPath = path.join(__dirname, "pages", "category.html");
app.get("/category", (req, res) => res.sendFile(categoryPath));

const productPath = path.join(__dirname, "pages", "product.html");
app.get("/product", (req, res) => res.sendFile(productPath));

const customPath = path.join(__dirname, "pages", "custom.html");
app.get("/custom", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log("Example app listening on port", port));