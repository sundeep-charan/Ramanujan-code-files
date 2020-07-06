// API routes
app.get("/users/create");
// Middlewares

app.get("*", function (req, res) {
  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client", "build")));
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  } else res.send();
});

app.listen(3000);
