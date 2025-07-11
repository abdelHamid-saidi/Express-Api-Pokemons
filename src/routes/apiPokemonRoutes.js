import express from 'express';
import pokemonController from '../controllers/pokemonController.js';
import { getAllTypes } from "../controllers/typeController.js";
import upload, { resetCurrentNumber } from "../middlewares/uploadMiddleware.js";
import { uploadMultiplePokemonImages, savePokemonImages } from "../middlewares/uploadMultipleMiddleware.js";

const router = express.Router();

// Routes Pokémon
router.get('/pokemons', pokemonController.getAllPokemons);
router.get('/pokemons/:id', pokemonController.getPokemonById);
router.post('/pokemons', pokemonController.createPokemon);
router.put('/pokemons/:id', pokemonController.updatePokemonById);
router.delete('/pokemons/:id', pokemonController.deletePokemonById);

// Route pour uploader une image de Pokémon
router.post('/upload/pokemon-all', uploadMultiplePokemonImages, savePokemonImages);

// Routes Types
router.get('/types', getAllTypes); 

export default router;
