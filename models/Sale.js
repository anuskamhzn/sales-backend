import mongoose from "mongoose";

const saleSchema = new mongoose.Schema(
  {
    agent_name: {
      type: String,
      required: [true, "Agent name is required"],
      trim: true,
      index: true,           // helps with queries & aggregation
    },
    sale_amount: {
      type: Number,
      required: [true, "Sale amount is required"],
      min: 0,
    },
    deals_no: {
      type: Number,
      required: [true, "Number of deals is required"],
      min: 1,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

// Optional: compound index if you'll frequently query by name + date
saleSchema.index({ agent_name: 1, createdAt: -1 });

export default mongoose.model("Sale", saleSchema);