import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, '../data/types.json');

const typeModel = {
  
  getTypes: () => {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  },

  addType: (type) => {
    try {
      const types = typeModel.getTypes();

      // Détermination de l’ID suivant
      const nextId = types.length ? Math.max(...types.map(t => t.id)) + 1 : 1;
      type.id = nextId;

      types.push(type);

      fs.writeFileSync(filePath, JSON.stringify(types, null, 2), 'utf8');
      console.log("✅ Nouveau type ajouté :", type);
      return type;
    } catch (err) {
      console.error("❌ Erreur lors de l'ajout du type :", err);
      return null;
    }
  },

  findTypeById: (id) => {
    const types = typeModel.getTypes();
    return types.find(t => t.id === id);
  },

  updateType: (id, updatedData) => {
    const types = typeModel.getTypes();
    const index = types.findIndex(t => t.id === id);
    if (index !== -1) {
      types[index] = { ...types[index], ...updatedData };
      fs.writeFileSync(filePath, JSON.stringify(types, null, 2), 'utf8');
      return types[index];
    }
    return null;
  },

  deleteType: (id) => {
    let types = typeModel.getTypes();
    const initialLength = types.length;
    types = types.filter(t => t.id !== id);
    fs.writeFileSync(filePath, JSON.stringify(types, null, 2), 'utf8');
    return types.length < initialLength;
  }
};

export default typeModel;
