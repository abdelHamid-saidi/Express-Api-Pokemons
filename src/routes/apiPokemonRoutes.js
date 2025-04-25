import express from 'express';
import pokemonController from '../controllers/pokemonController.js';
import imageController from "../controllers/imageController.js";
import { getAllTypes } from "../controllers/typeController.js";
import upload, { resetCurrentNumber } from "../middlewares/uploadMiddleware.js";
import { uploadMultiplePokemonImages, savePokemonImages } from "../middlewares/uploadMultipleMiddleware.js";

const router = express.Router();

// Routes Pokémon
router.get('/pokemons', pokemonController.getAllPokemonsFromJson);
router.get('/pokemons/:id', pokemonController.getPokemonById);
router.post('/pokemons', pokemonController.createPokemon);
router.put('/pokemons/:id', pokemonController.updatePokemonById);
router.delete('/pokemons/:id', pokemonController.deletePokemonById);

// Route pour uploader une image de Pokémon
router.post('/upload/pokemon-all', uploadMultiplePokemonImages, savePokemonImages);

router.post('/upload/pokemon-image', upload.single('image'), imageController.uploadPokemonImageHandler);
router.post('/upload/pokemon-shiny', upload.single('image'), imageController.uploadPokemonImageHandler);
router.post('/upload/pokemon-card', upload.single('image'), (req, res) => {
  imageController.uploadPokemonImageHandler(req, res);
  resetCurrentNumber(); 
});

// Routes Types
router.get('/types', getAllTypes); 

export default router;
