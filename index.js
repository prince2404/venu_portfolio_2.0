import express from "express";
import expressLayouts from "express-ejs-layouts";
const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(expressLayouts);
app.set('layout', 'layout');
app.set('view engine', 'ejs');
app.get("/", (req,res) => {
  res.render("index", { path: req.path });
});
app.get("/about", (req,res) => {
  res.render("about", { path: req.path });
});
app.get("/contact", (req,res) => {
  res.render("contact", { path: req.path });
});

app.get("/documentary", (req,res) => {
  res.render("documentary", { path: req.path });
});
app.get("/documentary/:id", (req, res) => {
  const id = req.params.id;
  res.render(`documentary-singles/documentary-single-${id}`, { path: req.path });
});

app.get("/animals", (req,res) => {
  res.render("animals", { path: req.path });
});
app.get("/animals/:id", (req, res) => {
  const id = req.params.id;
  res.render(`animals-singles/animals-single-${id}`, { path: req.path });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});