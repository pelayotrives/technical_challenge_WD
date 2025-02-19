const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const phoneSchema = new Schema(
  {
    id: {
      type: Number,
      unique: true
    },
    name: {
        type: String,
    },
    manufacturer: {
        type: String,
    },
    description: {
        type: String,
    },
    color: {
        type: String,
    },
    price: {
        type: Number,
    },
    imageFileName: {
        type: String,
    },
    screen: {
        type: String,
    },
    processor: {
        type: String,
    },
    ram: {
        type: Number,
    }
  }
);

const PhonesModel = model("Phones", phoneSchema);

module.exports = PhonesModel;
