const express = require("express");


const router = express.Router();


const {
    getDashboard
} =
require("../controllers/dashboardController");



// GET dashboard data

router.get(
    "/dashboard",
    getDashboard
);



module.exports = router;