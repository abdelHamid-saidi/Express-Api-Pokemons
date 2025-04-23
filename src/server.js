import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import apiPokemonRoutes from './routes/apiPokemonRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/assets", express.static(path.join(__dirname, "../assets")));

// Routes
app.use('/api',apiPokemonRoutes);

// Serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
