import mongoose from 'mongoose';

const pokemonSchema = new mongoose.Schema({
  _id: Number,
  id: Number,
  name: {
    english: String,
    japanese: String,
    chinese: String,
    french: String,
  },
  type: [String],
  base: {
    HP: Number,
    Attack: Number,
    Defense: Number,
    "Sp. Attack": Number,
    "Sp. Defense": Number,
    Speed: Number
  },
  image: String,
  image_shiny: String,
  card: String
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);
export default Pokemon;