const app = require("../app");

const { PORT } = process.env;

const port = PORT ? parseInt(PORT, 10) : 3000;

app.listen(port, () => {
  console.log(`Express: http://localhost:${port}`);
});
