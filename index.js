import express from "express";


import usersRoutes from "./routes/users.js";

import cors from 'cors'

const app = express();
const PORT = 5000;

app.use(cors())

app.use(express.json());

app.use("/people", usersRoutes);
app.get("/", (req, res) => res.send("Welcome to the Users API!"));
app.all("*", (req, res) =>res.send("No existe la ruta"));

app.listen(PORT, () =>console.log(`Servidor corriendo en el puerto: http://localhost:${PORT}`));
