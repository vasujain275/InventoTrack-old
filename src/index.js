import { app } from "./app.js";
import connectDB from "./db/connetDB.js";

const PORT = process.env.PORT || 8080;

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("ERR: ", error);
      throw error;
    });
    app.listen(PORT, () => {
      console.log(`Server is running at Port - ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed - ", err);
  });
