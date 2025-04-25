import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import apiPokemonRoutes from './routes/apiPokemonRoutes.js';

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3030;

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connecté à MongoDB"))
  .catch(err => console.error("Erreur MongoDB :", err));

app.use(cors());
app.use(express.json());
app.use("/assets", express.static(path.join(__dirname, "../assets")));
app.use('/api', apiPokemonRoutes);

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});