import multer from 'multer';
import path from 'path';
import fs from 'fs';

const folderPaths = {
  normal: 'assets/pokemons',
  shiny: 'assets/pokemons/shiny',
  card: 'assets/pokemons/card',
};

let currentNumber = null; 

const determineFolder = (req) => {
  if (req.originalUrl.includes('pokemon-shiny')) {
    return folderPaths.shiny;
  } else if (req.originalUrl.includes('pokemon-card')) {
    return folderPaths.card;
  } else {
    return folderPaths.normal;
  }
};

const findNextNumber = () => {
  const files = fs.readdirSync(folderPaths.normal);
  const numbers = files
    .filter(f => path.extname(f).toLowerCase() === '.png')
    .map(f => parseInt(path.basename(f, '.png')))
    .filter(n => !isNaN(n));
  return numbers.length > 0 ? Math.max(...numbers) + 1 : 1;
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const folder = determineFolder(req);
    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder, { recursive: true });
    }
    cb(null, folder);
  },
  filename: (req, file, cb) => {
    if (currentNumber === null) {
      currentNumber = findNextNumber();
    }
    cb(null, `${currentNumber}.png`);
  }
});

const fileFilter = (req, file, cb) => {
  const isPng = path.extname(file.originalname).toLowerCase() === '.png' && file.mimetype === 'image/png';
  isPng ? cb(null, true) : cb(new Error('Seuls les fichiers PNG sont autorisés !'));
};

const upload = multer({ storage, fileFilter });

export const resetCurrentNumber = () => {
  currentNumber = null;
};

export default upload;
