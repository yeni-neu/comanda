import app from "./app.js";

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Comanda API ejecutándose en http://localhost:${PORT}`);
});