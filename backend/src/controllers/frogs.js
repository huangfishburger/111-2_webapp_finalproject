import FrogDB from "../models/FrogDB";

export const getFrogs = async (req, res) => {
  try {
    const { 
      backColor,
      location,
      patternType,
      category,
    } = req.query;

    var query = {}
    if (backColor !== "不特定" && backColor !== undefined ) query["backColor"] = { $in: backColor };
    if (location !== "不特定" && location !== undefined ) query["location"] = { $in: location };
    if (patternType !== "不特定" && patternType !== undefined ) query["patternType"] = { $eq: patternType };
    if (category !== "不特定" && category !== undefined ) query["category"] = { $eq: category };

    console.log(query);
    const frogs = await FrogDB.find(query); 
    res.status(200).json(frogs);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};