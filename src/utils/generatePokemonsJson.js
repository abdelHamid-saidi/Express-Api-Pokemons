import fs from 'fs';
import pokemonsList from '../data/pokemonsList.js';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const generatePokemonsJson = () => {
    try {
        const API_URL = process.env.API_URL;

        const enhancedList = pokemonsList.map(pokemon => ({
        ...pokemon,
        image_shiny: `${API_URL}/assets/pokemons/shiny/${pokemon.id}.png`,
        card: 'https://tcg.pokemon.com/assets/img/global/tcg-card-back-2x.jpg'
        }));

        const filePath = path.join(__dirname, '../data/pokemons.json');

        fs.writeFileSync(filePath, JSON.stringify(enhancedList, null, 2));

        console.log('✅ Fichier enrichi généré avec succès !');
    } catch (error) {
        console.error('❌ Erreur lors de la génération du fichier JSON :', error);
    }
};

// Exécution directe
if (process.argv[1] === fileURLToPath(import.meta.url)) {
    generatePokemonsJson();
}

export default generatePokemonsJson;
