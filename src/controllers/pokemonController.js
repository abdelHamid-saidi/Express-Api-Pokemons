import Joi from 'joi';
import Pokemon from '../models/pokemonModel.js';

const pokemonSchema = Joi.object({
  id: Joi.number().integer().min(1).required(),
  name: Joi.object({
    english: Joi.string().required(),
    japanese: Joi.string().required(),
    chinese: Joi.string().required(),
    french: Joi.string().required(),
  }).required(),
  type: Joi.array().items(Joi.string()).min(1).required(),
  base: Joi.object({
    HP: Joi.number().required(),
    Attack: Joi.number().required(),
    Defense: Joi.number().required(),
    "Sp. Attack": Joi.number().required(),
    "Sp. Defense": Joi.number().required(),
    Speed: Joi.number().required()
  }).required(),
  image: Joi.string().uri().required(),
  image_shiny: Joi.string().uri().required(),
  card: Joi.string().uri().optional()
});

const pokemonVisibility = {
  _id: 0,         
  id: 1,
  name: 1,
  type: 1,
  base: 1,
  image: 1,
  image_shiny: 1,
  card: 1
};

const pokemonController = {
  getAllPokemons: async (req, res) => {
    try {
      const pokemons = await Pokemon.find({}, pokemonVisibility);
      
          const formatted = pokemons.map(p => {
      const obj = p.toObject();

      // Vérifier que base.Sp existe bien
      const spAtk = obj.base.Sp?.[" Attack"] || obj.base["Sp. Attack"];
      const spDef = obj.base.Sp?.[" Defense"] || obj.base["Sp. Defense"];

      return {
        ...obj,
        base: {
          HP: obj.base.HP,
          Attack: obj.base.Attack,
          Defense: obj.base.Defense,
          "Sp. Attack": spAtk,
          "Sp. Defense": spDef,
          Speed: obj.base.Speed
        }
      };
    });

    res.status(200).json(formatted); 
    } catch (error) {
      console.error('Erreur lors de la récupération des pokémons :', error);
      res.status(500).json({ message: "Erreur serveur" });
    }
  },

  getPokemonById: async (req, res) => {
    try {
      const p = await Pokemon.findById(req.params.id, pokemonVisibility);

      if (!p) return res.status(404).json({ message: "Pokemon non trouvé" });

      const obj = p.toObject();

      const spAtk = obj.base.Sp?.[" Attack"] || obj.base["Sp. Attack"];
      const spDef = obj.base.Sp?.[" Defense"] || obj.base["Sp. Defense"];

      const formatted = {
        ...obj,
        base: {
          HP: obj.base.HP,
          Attack: obj.base.Attack,
          Defense: obj.base.Defense,
          "Sp. Attack": spAtk,
          "Sp. Defense": spDef,
          Speed: obj.base.Speed
        }
      };

      res.status(200).json(formatted);
    } catch (error) {
      console.error('Erreur lors de la récupération du Pokémon :', error);
      res.status(500).json({ message: "Erreur serveur" });
    }
  },

  createPokemon: async (req, res) => {
    const { error } = pokemonSchema.validate(req.body);
    if (error) return res.status(400).json({ message: "Données invalides", details: error.details });

    try {
      const newPokemon = new Pokemon(req.body);
      await newPokemon.save();
      const createdPokemon = await Pokemon.findById(newPokemon._id, pokemonVisibility);
      res.status(201).json(createdPokemon);
    } catch (error) {
      console.error('Erreur lors de la création du Pokémon :', error);
      res.status(500).json({ message: "Erreur serveur" });
    }
  },

  updatePokemonById: async (req, res) => {
    const { error } = pokemonSchema.validate(req.body);
    if (error) return res.status(400).json({ message: "Données invalides", details: error.details });

    try {
      const updated = await Pokemon.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, projection: pokemonVisibility } // <-- la projection ici aussi
      );
      if (updated) res.status(200).json(updated);
      else res.status(404).json({ message: "Pokemon non trouvé" });
    } catch (error) {
      console.error('Erreur lors de la mise à jour du Pokémon :', error);
      res.status(500).json({ message: "Erreur serveur" });
    }
  },

  deletePokemonById: async (req, res) => {
    try {
      const deleted = await Pokemon.findByIdAndDelete(req.params.id);
      if (deleted) res.status(200).json({ message: "Pokémon supprimé" });
      else res.status(404).json({ message: "Pokemon non trouvé" });
    } catch (error) {
      console.error('Erreur lors de la suppression du Pokémon :', error);
      res.status(500).json({ message: "Erreur serveur" });
    }
  },
};

export default pokemonController;
