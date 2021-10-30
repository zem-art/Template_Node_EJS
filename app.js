const { express, morgan, expressLayouts } = require("./modules/modules");
require("dotenv").config();
// Express
const app = express();

const port = process.env.PORT;
const host = process.env.HOST;

// // Configurations View Enggine Exprress Layout
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(expressLayouts);
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Welcome",
    layout: false,
  });
});

app.get("/login", (req, res) => {
  res.render("auth/login", {
    title: "Login",
    layout: "base/base-auth.ejs",
  });
});

app.get("/register", (req, res) => {
  res.render("auth/register", {
    title: "Register",
    layout: "base/base-auth.ejs",
  });
});

app.get("/forgot", (req, res) => {
  res.render("auth/forgot", {
    title: "Forgot Password",
    layout: "base/base-auth.ejs",
  });
});

app.get("/dashboard", (req, res) => {
  res.render("page/dashboard", {
    title: "Dashboard",
    layout: "base/base-dashboard",
  });
});

app.get("/user", (req, res) => {
  res.render("page/user-profile", {
    title: "User",
    layout: "base/base-dashboard",
  });
});

app.get("/table", (req, res) => {
  res.render("page/table-list", {
    title: "Table List",
    layout: "base/base-dashboard",
  });
});

app.get("/typography", (req, res) => {
  res.render("page/typografi", {
    title: "Typografy",
    layout: "base/base-dashboard",
  });
});

app.get("/icon", (req, res) => {
  res.render("page/icons", {
    title: "Icons",
    layout: "base/base-dashboard",
  });
});

app.get("/maps", (req, res) => {
  res.render("page/map", {
    title: "Maps",
    layout: "base/base-dashboard",
  });
});

app.get("/notifications", (req, res) => {
  res.render("page/notifications", {
    title: "Notifications",
    layout: "base/base-dashboard",
  });
});

// STATUS EROR NOT FOUNDS
app.use((req, res) => {
  res.status(404);
  res.send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log(`Apps Is Running In http://${host}:${port}`);
});
