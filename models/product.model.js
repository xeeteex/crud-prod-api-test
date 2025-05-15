import mongoose from "mongoose";

const ProducSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please entern the product name"],
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product",ProducSchema)

export default Product