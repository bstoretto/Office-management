require("dotenv").config();
const express = require('express');
const app = express();
const userRouter = require("./api/users/user.router");
const userDepartment = require("./api/department/department.router");
const userEmployee = require("./api/employee/employee.router");
const userReview = require("./api/review/review.router");
const userReport = require("./api/report/report.router");
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.get("products/:id", function (req, res, next) {
  res.json({ msg: "CORS Enabled" });
});

app.use("/api/users", userRouter);
app.use("/api/department", userDepartment);
app.use("/api/employee", userEmployee);
app.use("/api/review", userReview);
app.use("/api/report", userReport);
app.listen(process.env.APP_PORT, ()=>{
  console.log("Server is ruuning on port :-", process.env.APP_PORT)
})