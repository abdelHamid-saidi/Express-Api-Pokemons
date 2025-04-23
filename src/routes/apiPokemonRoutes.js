import express from 'express';
import upload from "../middlewares/uploadMiddleware.js";
import pokemonController from '../controllers/pokemonController.js'; 

const router = express.Router();

router.get('/pokemons/', pokemonController.getAllPokemons);
router.get('/pokemons/:id', pokemonController.getPokemonById);
// router.post('/pokemons/', upload.single("image"), pokemonController.createPokemon);
router.post('/upload', upload.single("image"), pokemonController.uploadImage);
router.post('/pokemons', pokemonController.createPokemon);
router.put('/pokemons/:id', pokemonController.updatePokemonById);
router.delete('/pokemons/:id', pokemonController.deletePokemonById);

export default router;
