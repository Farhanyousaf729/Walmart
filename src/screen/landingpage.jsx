import React from "react";
import { useState, useEffect } from "react";
import Data from "../Api/clothing";
import FinalProduct from "./finalproduct";

const Landing = (props) => {
    const [api, setapi] = useState(Data)

    const [mystate, setmystate] = useState(api.Kids)
    useEffect(() => {
        switch (props.data.ID) {
            case `1`: { setmystate(api.Kids) };
                break;
            case `2`: { setmystate(api.Boys) };
                break;
            case `3`: { setmystate(api.Girls) };
                break;
        }


    }, [props.data])

    const [myindex, setindex] = useState("")

    const handleclick = (ele) => {
        setindex(ele)
    }


    return (
        <>

            {
                myindex ? <FinalProduct  data={myindex}/> : <div className="pb-10 px-8">
                    <marquee behavior="scroll" direction="right">{mystate.Detail.promo}</marquee>
                    <h1 className="font-bold text-5xl text-center  py-8 hover:underline">"{mystate.Detail.tital}"</h1>
                    <h1 className="text-center font-semibold text-lg py-4">-- {mystate.Detail.disscription} --</h1>

                    <div className="flex flex-wrap justify-self-auto">
                        {
                            mystate.Products.map((ele, index) => {
                                return <div className="w-[25%] border-2 px-2 ">
                                    <p className="w-[4rem] h-[4rem] rounded-full flex justify-center items-center  bg-red-500   font-bold  text-xl    absolute  ">{ele.discount} %</p>
                                    <div className="overflow-hidden" ><img onClick={() => { handleclick(ele) }} className="scale " src={ele.img} alt="" /></div>
                                    <h1 className="font-semibold text-lg">${ele.price}</h1>

                                    <p className="text-sm">{ele.name}</p>
                                </div>
                            })
                        }
                    </div>

                </div>
            }














        </>
    )

}
export default Landing