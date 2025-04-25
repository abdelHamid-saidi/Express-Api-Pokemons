import mongoose from 'mongoose';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import Pokemon from '../models/pokemonModel.js';
import Type from '../models/typeModel.js';

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    const data = JSON.parse(fs.readFileSync(path.join('./src/data/pokemons.json'), 'utf-8'));

    const pokemons = data.map(pokemon => ({
      ...pokemon,
      _id: pokemon.id
    }));

    await Pokemon.deleteMany({});
    await Pokemon.insertMany(pokemons);

    const types = JSON.parse(fs.readFileSync(path.join('./src/data/types.json'), 'utf-8'));

    const formattedTypes = types.map(type => ({
      ...type,
      _id: type.id
    }));

    await Type.deleteMany({});
    await Type.insertMany(formattedTypes);

    console.log("Données insérées dans MongoDB");
    mongoose.disconnect();
  })
  .catch(err => console.error("Erreur de migration :", err));
