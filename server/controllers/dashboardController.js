const {
    getDashboardData
} = require("../services/dashboardService");



const getDashboard = (req,res)=>{


    try{


        const dashboardData =
            getDashboardData();



        res.status(200).json({

            success:true,

            data:dashboardData

        });



    }
    catch(error){


        res.status(500).json({

            success:false,

            message:"Failed to fetch dashboard data",

            error:error.message

        });


    }


};



module.exports = {
    getDashboard
};