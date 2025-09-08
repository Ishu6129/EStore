const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');

const ownerRouter = require('./routes/ownerRouter');
const userRouter = require('./routes/userRouter');
const productRouter = require('./routes/productRouter');

const db=require('./config/MongooseConnection');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.use("/owner",ownerRouter);
app.use("/user",userRouter);
app.use("/product",productRouter);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});