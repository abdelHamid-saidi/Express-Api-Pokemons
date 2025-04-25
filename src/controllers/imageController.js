
const imageController = {
  uploadPokemonImageHandler : (req, res) => {
    if (!req.file) {
      return res.status(400).json({ message: "Aucune image reçue." });
    }

    let folder = "pokemons";
    if (req.originalUrl.includes('pokemon-shiny')) {
      folder = "pokemons/shiny";
    } else if (req.originalUrl.includes('pokemon-card')) {
      folder = "pokemons/card";
    }

    const imageUrl = `${process.env.API_URL || 'http://localhost:3030'}/assets/${folder}/${req.file.filename}`;
    return res.status(200).json({
      message: "✅ Image uploadée avec succès",
      filename: req.file.filename,
      url: imageUrl
    });
  }
};

export default imageController;