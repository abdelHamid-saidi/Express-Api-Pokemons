import multer from "multer";
import path from "path";
import fs from "fs";

const folderPath = "assets/pokemons";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, folderPath);
  },
  filename: (req, file, cb) => {
    fs.readdir(folderPath, (err, files) => {
      if (err) return cb(err);

      // Récupère les noms des fichiers PNG
      const pngNumbers = files
        .filter(f => path.extname(f).toLowerCase() === ".png")
        .map(f => parseInt(path.basename(f, ".png")))
        .filter(n => !isNaN(n));

      const nextNumber = pngNumbers.length ? Math.max(...pngNumbers) + 1 : 1;
      const filename = `${nextNumber}.png`;

      cb(null, filename);
    });
  }
});

const fileFilter = (req, file, cb) => {
  const isPNG = path.extname(file.originalname).toLowerCase() === ".png" &&
                file.mimetype === "image/png";

  if (isPNG) {
    cb(null, true);
  } else {
    cb(new Error("Seuls les fichiers PNG sont autorisés !"));
  }
};

const upload = multer({ storage, fileFilter });

export default upload;
