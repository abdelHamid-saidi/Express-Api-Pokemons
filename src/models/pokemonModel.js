import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, '../data/pokemons.json');

const pokemonModel = {
  
  getPokemons: () => {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  }, 

  
  addPokemon: (pokemon) => {
    try {
      const pokemons = pokemonModel.getPokemons();
    
      // Lire les images existantes pour déterminer le prochain ID
      const folderPath = "assets/pokemons";
      const files = fs.readdirSync(folderPath);
      const pngNumbers = files
        .filter(f => path.extname(f).toLowerCase() === ".png")
        .map(f => parseInt(path.basename(f, ".png")))
        .filter(n => !isNaN(n));
    
      const nextId = pngNumbers.length ? Math.max(...pngNumbers) + 1 : 1;
      pokemon.id = nextId;
      pokemon.image = `${process.env.API_URL}/assets/pokemons/${pokemon.id}.png`;
    
      pokemons.push(pokemon);
    
      console.log("➡️ Nouveau Pokémon ajouté :", pokemon);
      fs.writeFileSync(filePath, JSON.stringify(pokemons, null, 2), 'utf8');
      console.log("✅ Écriture réussie dans :", filePath);
    
      return pokemon;
    } catch (err) {
      console.error("❌ Erreur lors de l'ajout du Pokémon :", err);
      return null;
    }
  },


  findPokemonById: (id) => {
    const pokemons = pokemonModel.getPokemons();
    return pokemons.find(p => p.id === id);
  },

  
  updatePokemon: (id, updatedData) => {
    const pokemons = pokemonModel.getPokemons();
    const index = pokemons.findIndex(p => p.id === id);
    if (index !== -1) {
      pokemons[index] = { ...pokemons[index], ...updatedData };
      fs.writeFileSync(filePath, JSON.stringify(pokemons, null, 2), 'utf8');
      return pokemons[index];
    }
    return null;
  },

  
  deletePokemon: (id) => {
    let pokemons = pokemonModel.getPokemons();
    const initialLength = pokemons.length;
    pokemons = pokemons.filter(p => p.id !== id);
    fs.writeFileSync(filePath, JSON.stringify(pokemons, null, 2), 'utf8');
    return pokemons.length < initialLength; // Retourne true si un élément a été supprimé
  }
};

export default pokemonModel;
