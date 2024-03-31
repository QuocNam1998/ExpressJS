import mongoose from "mongoose";
const dbState = [
  { value: 0, label: "disconnected" },
  { value: 1, label: "connected" },
  { value: 2, label: "connecting" },
  { value: 3, label: "disconnecting" },
];

const kittySchema = new mongoose.Schema({
  name: String,
});
// add method into schema
kittySchema.methods.speak = function speak() {
  const isHadName = this.name;
  console.log(`>>>the cat is saying ${isHadName ? "mew mew" : "nothing"}`);
};

const Kitten = mongoose.model("Kitten", kittySchema);
const silence = new Kitten({ name: "Nam por" });
console.log(">>>name is:", silence.name);

const connection = async () => {
  try {
    const options = {
      user: process.env.DB_USER,
      pass: process.env.DB_PASS,
      dbName: process.env.DB_NAME,
    };
    await mongoose.connect(process.env.DB_HOST, options);
    const state = Number(mongoose.connection.readyState);
    console.log(dbState.find((f) => f.value == state).label, "to db"); // connected to db
    await silence.save();
    console.log("Document saved successfully!");
  } catch (error) {
    console.error(">>>error connect", error);
  }
};
export default connection;
