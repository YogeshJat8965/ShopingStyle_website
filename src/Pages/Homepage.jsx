import { useEffect, useState } from "react";
import Header from "../Components/Header";
import Card from "../Components/Card";
import Spinner from "../Components/Spinner";

export default function Homepage() {

    const API_URL = "https://fakestoreapi.com/products";
    const [apiData, setapiData] = useState([]);
    const [loading, setloading] = useState(false);

    async function fetchData() {

        setloading(true);

        try {
            const res = await fetch(API_URL);
            const data = await res.json();
            setapiData(data);
            console.log("apiData is ", apiData);
        }
        catch {
            console.log("Data not found");
            setapiData([]);
        }

        setloading(false);

    }
    useEffect(
        () => {
            fetchData();
        },
        []
    );
    // useEffect(() => {
    //     console.log("apiData is ", apiData);
    // }, [apiData]);


    return (

        <div className="w-full " >{

            loading ?
                (<div className='relative left-[45%] top-20 '><Spinner  ></Spinner></div>) :
                (<div className="w-full flex justify-center items-center mt-[130px] " >
                    <div className="w-10/12 max-w-[1200px] flex flex-wrap  justify-center items-center gap-4 " >
                        {
                            apiData.map((singleData) => {
                                return <Card singleData={singleData} ></Card>
                            }

                            )
                        }
                    </div>
                </div>
                )
        }
        </div>



    );

}