const {
    getDashboardData
}
=
require("./services/dashboardService");


console.log(
    JSON.stringify(
        getDashboardData(),
        null,
        2
    )
);