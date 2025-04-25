import mongoose from 'mongoose';

const typeSchema = new mongoose.Schema({
  _id: Number,
  id: Number,
  type: String,
  image: String,
  color: String,
});

const Type = mongoose.model('Type', typeSchema);
export default Type;
