import { useEffect, useState } from "react";

import api from "../services/api";



const useDashboard = ()=>{


    const [dashboard,setDashboard] =
    useState(null);



    const [loading,setLoading] =
    useState(true);



    const [error,setError] =
    useState(null);



    useEffect(()=>{


        const fetchDashboard = async()=>{


            try{

                setTimeout(()=>{
                    setDashboard(response.data.data)
                },2000)


                const response =
                await api.get("/dashboard");


                setDashboard(
                    response.data.data
                );


            }
            catch(error){

                setError(error.message);

            }
            finally{

                setLoading(false);

            }


        };


        fetchDashboard();


    },[]);



    return {
        dashboard,
        loading,
        error
    };


};


export default useDashboard;