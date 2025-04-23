import fs from 'fs';
import pokemonsList from '../data/pokemonsList.js';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const generatePokemonsJson = () => {
    try {
        const pokemonsJson = JSON.stringify(pokemonsList, null, 2);

        // 🔁 Chemin vers le dossier /data
        const filePath = path.join(__dirname, '../data/pokemons.json');

        fs.writeFileSync(filePath, pokemonsJson);
        console.log('✅ Le fichier pokemons.json a été généré avec succès dans le dossier /data !');
    } catch (error) {
        console.error('❌ Erreur lors de la génération du fichier JSON :', error);
    }
};

// Exécution directe
if (process.argv[1] === fileURLToPath(import.meta.url)) {
    generatePokemonsJson();
}

export default generatePokemonsJson;
