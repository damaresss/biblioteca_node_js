// configuração inicial
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

// forma de ler JSON / middlewares
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

// rotas da API
const authorRoutes = require("./routes/authorRoutes");
const bookRoutes = require("./routes/bookRoutes");
const publishingCompanyRoutes = require("./routes/publishingCompanyRoutes");

app.use("/book", bookRoutes);
app.use("/author", authorRoutes);
app.use("/publishingCompany", publishingCompanyRoutes);

// rota inicial / endpoint
app.get("/", (req, res) => {
  res.json({ message: "Oi, Express!" });
});

const DB_USER = process.env.DB_USER;
const DB_PWD = encodeURIComponent(process.env.DB_PASSWORD);
mongoose.set('strictQuery', true);
mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PWD}@apicluster.6d1ehgt.mongodb.net/biblioteca_node_js?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);


app.listen(3000);
