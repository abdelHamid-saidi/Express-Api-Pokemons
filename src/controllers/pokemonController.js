import Joi from 'joi';
import pokemonModel from "../models/pokemonModel.js";


// Schéma de validation avec Joi
const pokemonSchema = Joi.object({
  name: Joi.object({
    english: Joi.string().required(),
    japanese: Joi.string().required(),
    chinese: Joi.string().required(),
    french: Joi.string().required(),
  }).required(),
  type: Joi.array().items(
    Joi.string().valid(
      "fire", "water", "grass", "electric", "ice", "fighting", "poison", "ground", "flying", 
      "psychic", "bug", "rock", "ghost", "dragon", "dark", "steel", "fairy"
    ).required()
  ).min(1).required(),
  base: Joi.object({
    HP: Joi.number().integer().min(0).required(),
    Attack: Joi.number().integer().min(0).required(),
    Defense: Joi.number().integer().min(0).required(),
    "Sp. Attack": Joi.number().integer().min(0).required(),
    "Sp. Defense": Joi.number().integer().min(0).required(),
    Speed: Joi.number().integer().min(0).required(),
  }).required(),
  image: Joi.string().optional() 
});

// Contrôleur Pokémon
const pokemonController = {
  getAllPokemons: (req, res) => {
    try {
      res.status(200).json({
        status: 200,
          types: [
            "fire", "water", "grass", "electric", "ice", "fighting",
            "poison", "ground", "flying", "psychic", "bug", "rock",
            "ghost", "dragon", "dark", "steel", "fairy"
          ],
        data: pokemonModel.getPokemons(),
      });
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: "Erreur interne du serveur",
        error: error.message,
      });
    }
  },

  getPokemonById: (req, res) => {
    const id = parseInt(req.params.id);
    const pokemon = pokemonModel.findPokemonById(id);

    if (pokemon) {
      res.status(200).json({
        status: 200,
        data: pokemon,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "Pokemon non trouvé",
      });
    }
  },

  createPokemon: (req, res) => {
    const { name, type, base, image } = req.body;

    const parsedName = typeof name === 'string' ? JSON.parse(name) : name;
    const parsedBase = typeof base === 'string' ? JSON.parse(base) : base;

    const { error } = pokemonSchema.validate({
      name: parsedName,
      type: Array.isArray(type) ? type : [type],
      base: parsedBase,
      image,
    });

    if (error) {
      return res.status(400).json({
        status: 400,
        message: "Données invalides",
        details: error.details,
      });
    }

    const newPokemon = pokemonModel.addPokemon({
      name: parsedName,
      type,
      base: parsedBase,
      image,
    });

    return res.status(201).json({
      status: 201,
      data: newPokemon,
    });
  },

  uploadImage: (req, res) => {

    if (!req.file) {
      return res.status(400).json({ status: 400, message: "Aucune image reçue" });
    }

    const filename = req.file.filename;
    const imageUrl = `${process.env.API_URL || "http://localhost:3000"}/assets/pokemons/${filename}`;

    return res.status(200).json({
      status: 200,
      filename,
      url: imageUrl,
    });
  },

  updatePokemonById: (req, res) => {
    const id = parseInt(req.params.id);

    const { error } = pokemonSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        status: 400,
        message: "Données invalides",
        details: error.details,
      });
    }

    const updatedPokemon = pokemonModel.updatePokemon(id, req.body);

    if (updatedPokemon) {
      res.status(200).json({
        status: 200,
        data: updatedPokemon,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "Pokemon non trouvé",
      });
    }
  },

  deletePokemonById: (req, res) => {
    const id = parseInt(req.params.id);
    const isDeleted = pokemonModel.deletePokemon(id);

    if (isDeleted) {
      res.status(200).json({
        status: 200,
        message: "Pokémon supprimé avec succès",
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "Pokemon non trouvé",
      });
    }
  },

  welcomeMessage: (req, res) => {
    res.status(200).json({
      status: 200,
      message: "Bienvenue sur l'API Pokémon",
    });
  }
};

export default pokemonController;
