import multer from 'multer';
import fs from 'fs';
import path from 'path';

const folderPaths = {
  normal: 'assets/pokemons',
  shiny: 'assets/pokemons/shiny',
  card: 'assets/pokemons/card',
};

Object.values(folderPaths).forEach(folder => {
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
  }
});

// Fonction pour trouver le prochain numéro unique
const findNextNumber = () => {
  const files = fs.readdirSync(folderPaths.normal);
  const numbers = files
    .filter(f => path.extname(f).toLowerCase() === '.png')
    .map(f => parseInt(path.basename(f, '.png')))
    .filter(n => !isNaN(n));
  return numbers.length > 0 ? Math.max(...numbers) + 1 : 1;
};

const storage = multer.memoryStorage(); // On garde temporairement les images en RAM

const fileFilter = (req, file, cb) => {
  const isPng = path.extname(file.originalname).toLowerCase() === '.png' && file.mimetype === 'image/png';
  isPng ? cb(null, true) : cb(new Error('Seuls les fichiers PNG sont autorisés !'));
};

const upload = multer({ storage, fileFilter });

export const uploadMultiplePokemonImages = upload.fields([
  { name: 'image', maxCount: 1 },
  { name: 'shiny', maxCount: 1 },
  { name: 'card', maxCount: 1 },
]);

export const savePokemonImages = (req, res) => {
  if (!req.files || !req.files.image || !req.files.shiny || !req.files.card) {
    return res.status(400).json({ message: 'Toutes les images (image, shiny, card) doivent être fournies.' });
  }

  const nextNumber = findNextNumber();
  const filename = `${nextNumber}.png`;

  // Fonction pour sauvegarder un fichier buffer vers un dossier
  const saveFile = (buffer, folder) => {
    const fullPath = path.join(folder, filename);
    fs.writeFileSync(fullPath, buffer);
  };

  try {
    saveFile(req.files.image[0].buffer, folderPaths.normal);
    saveFile(req.files.shiny[0].buffer, folderPaths.shiny);
    saveFile(req.files.card[0].buffer, folderPaths.card);

    return res.status(201).json({
      message: "✅ Images Pokémon enregistrées avec succès",
      number: nextNumber,
      images: {
        normal: `${process.env.API_URL || 'http://localhost:3030'}/assets/pokemons/${filename}`,
        shiny: `${process.env.API_URL || 'http://localhost:3030'}/assets/pokemons/shiny/${filename}`,
        card: `${process.env.API_URL || 'http://localhost:3030'}/assets/pokemons/card/${filename}`,
      }
    });
  } catch (error) {
    console.error("❌ Erreur lors de la sauvegarde :", error);
    return res.status(500).json({ message: "Erreur lors de la sauvegarde des images", error: error.message });
  }
};
