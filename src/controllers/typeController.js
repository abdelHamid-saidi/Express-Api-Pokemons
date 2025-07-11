import Type from "../models/typeModel.js";

export const getAllTypes = async (req, res) => {
  try {
    const types = await Type.find({}, {
      _id: 0,
      id: 1,
      type: 1,
      image: 1,
      color: 1
    });
    res.status(200).json(types);
  } catch (err) {
    res.status(500).json({ message: "Erreur lors de la récupération des types", error: err.message });
  }
};
