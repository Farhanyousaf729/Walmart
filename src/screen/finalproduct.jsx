import React, { useState } from "react";
import useLocalStorage from "../Api/localstorege";

const FinalProduct = (props) => {
    console.log(props.data,`test`);
    const [mypic,setmypic] = useState("")
    const [storage, setstorage] = useLocalStorage(`data`, [])
    const [state, setstate] = useState(props.data)


    const handleClick = () => {
        let price = props.data.price * props.data.discount / 100
           let disc = props.data.price - price
           let endPrice = Number(disc.toFixed(2))
        const Obj = {
            Name: props.data.actualName,
            Discount:props.data.discount,
            DiscountPrice: endPrice,
            Price : props.data.price,
            Pic : props.data.img,
        }
        setstorage(Obj)

    }

    
    const handlChange =(ele)=>{
        setmypic(ele)
    }
    return (
        <>
        
            <div className="grid  grid-rows-1 grid-cols-3 px-10">
                <div className=" flex  justify-center  col-span-2  ">
                    <img src={mypic ? mypic : state.img} alt="" className=" " />

                    <div className="flex pb-4  flex-col   justify-center ">
                        {
                            state && (state.pics.map((ele) => {
                                return <img src={ele} alt="" onClick={()=>{handlChange(ele)}} className="btn border-2 py-6 w-[6rem] h-[6rem]" />

                            }))

                        }
                    </div>
                </div>

                <div className=" flex flex-col justify-end  ">
                    <p className="font-semibold text-5xl pb-20">{state.name}</p>
                    <p className="text-red-500 font-bold text-3xl pb-4"> Discout {state.discount}%</p>
                    <ul className="flex font-semibold text-lg pb-4">{state.ClothingSize.map((ele) => {
                        return <li className="pr-2">{ele}</li>
                    })}</ul>
                    <ul className="flex font-semibold text-lg  pb-4">
                        {
                            state && (state.color.map((ele) => {
                                return <li className="pr-2">{ele}</li>

                            }))

                        }
                    </ul>

                    <h1 className="font-bold text-5xl pb-4">$ {state.price}</h1>
                    <button onClick={handleClick} className=" btn border-2 bg-black text-white text-xl font-bold py-4 inline-block w-[50%] rounded-md">Add To Cart</button>
                </div>

            </div>
        </>
    )

}
export default FinalProduct