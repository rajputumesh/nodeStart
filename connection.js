const mongoose = require('mongoose');
const uri = "mongodb+srv://myroot:Ib1S3G4cY45f3XIx@myblog.s0ucwvl.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri);
mongoose.connection.on('connected',() => {
  console.log("Database created!");
});
