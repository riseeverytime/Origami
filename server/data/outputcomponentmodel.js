import mongoose from 'mongoose';

const outputComponentSchema = mongoose.Schema({
  id: {
    type: String,
    unique: true
  },
  baseComponentId: Number,
  props: Array
});

export default mongoose.model("outputComponent", outputComponentSchema);
