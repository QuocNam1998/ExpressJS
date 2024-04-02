import mongoose from "mongoose";

const kittySchema = new mongoose.Schema({
  name: String,
});
// add method into schema
kittySchema.methods.speak = function speak() {
  const isHadName = this.name;
  return ` ${isHadName ? "mew mew" : "nothing"}`;
};

const Kitten = mongoose.model("Kitten", kittySchema);
export default Kitten;
