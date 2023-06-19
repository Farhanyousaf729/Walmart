import React, { useEffect, useState, useRef } from "react";
import { BsBoxes } from "react-icons/bs";
import { FaBoxes } from "react-icons/fa"
import { FiSearch } from "react-icons/fi"
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai"
import { BiMale } from "react-icons/bi"
import Img from "../assets/pics/logo.svg"
import { Link } from "react-router-dom";
const Nav = (props) => {
    const [localarry, setlocalarry] = useState(() => {
        const store = localStorage.getItem(`data`)
        return store ? JSON.parse(store) : []
    })
    const [totalpayment, settotalpyment] = useState("")
    const [totalquantity, settotalquantity] = useState("")
    useEffect(() => {
        let i = 0;
        let total = 0;
        localarry.map((e, index) => {
            total = total + e.DiscountPrice
            if (i === 0) {
                i = 1
                settotalquantity(i)
            }
            else {
                i = i + 1
                settotalquantity(i)
            }
        })

        settotalquantity(i)
        settotalpyment(Number(total.toFixed(2)))
    }, [localarry])

    const [myid, setmyid] = useState("")
    const [toggle, setToggle] = useState(true)

    const handleClothing = (e) => {
        setmyid(e.target.id)
        console.log(e.target.id);
    }

    // const handleClothingClose = () => {
    //     setshowclothing(false)

    // }

    const handleShow = () => {
        setToggle(!toggle)


    }



    // console.log(props.data);





    return (
        <>

            <nav className=" bg-[#0071DC] font-sans  py-5 px-2 flex items-center  justify-around  z-20 sticky top-0">
                <img src={Img} onClick={props.data.click}  id="" className="cursor-pointer" alt="" />

                <button className=" Hover py-2 px-3 rounded-[50px] relative  " onClick={handleShow}>
                    <div className="flex  items-center gap-2 text-white font-semibold ">
                        <BsBoxes />
                        <p>Departments</p>
                    </div>
                    {!toggle ? <ul className="absolute z-50 text-start w-[100%] text-lg top-16 shadow-md bg-white py-2 pl-2"  >
                        <li className="text-sm font-bold py-2">All departments</li>
                        <li className="underline font-semibold  show "    >Clothing

                            <ul className="shadow-md p-2 bg-white show_li w-[100%] absolute left-[100%] top-0 "   >
                                <li className="underline font-light " id="1" onClick={props.data.click}>Kids</li>
                                <li className="underline font-light" id="2" onClick={props.data.click}>Boys</li>
                                <li className="underline font-light" id="3" onClick={props.data.click}>Girls</li>
                                <li className="underline font-light" id="4" onClick={props.data.click}>Women</li>
                            </ul>
                        </li>
                        <li className="underline font-semibold show "   >Grocery

                            <ul className="shadow-md p-2 bg-white show_li w-[100%]  absolute left-[100%] top-7 ">
                                <li className="underline font-light">Kitchen</li>
                                <li className="underline font-light">Toilet</li>
                                <li className="underline font-light">House Holds</li>
                                <li className="underline font-light">Kitchen Electorinics</li>
                            </ul>
                        </li>
                        <li className="underline font-semibold show"    >Sports
                            <ul className="shadow-md p-2 bg-white show_li w-[100%]  absolute left-[100%] top-16">
                                <li className="underline font-light">Base Ball</li>
                                <li className="underline font-light">Exercise</li>
                                <li className="underline font-light">Soccor</li>
                                <li className="underline font-light">Cycling</li>
                            </ul>

                        </li>
                        <li className="underline font-semibold show" >Gardning
                            <ul className="shadow-md p-2 bg-white show_li w-[100%]  absolute left-[100%] top-28">
                                <li className="underline font-light">Tools</li>
                                <li className="underline font-light">Pestisides</li>
                                <li className="underline font-light">Soils</li>
                                <li className="underline font-light">Fertilizers</li>
                            </ul>
                        </li>
                    </ul> : <></>}

                </button>
                <button className="Hover py-2 px-3 rounded-[50px]">
                    <div className="flex items-center gap-2 text-white font-semibold ">
                        <FaBoxes />
                        <p>Services</p>
                    </div>
                </button>
                <div className="flex w-[30%] bg-white items-center px-3 rounded-[50px]">
                    <input type="text" className="w-[95%] outline-none rounded-[50px] py-2 " placeholder="Search every thing on walmart" />
                    <div className="bg-[#FFC220] w-[2rem] h-[2rem] rounded-full flex justify-center items-center"><FiSearch /></div>
                </div>
                <button className=" Hover text-white flex items-center  rounded-[50px] px-3 ">
                    <AiOutlineHeart />
                    <p className="text-xs pl-2">Reorder <br /> <span className="text-base font-semibold">My Items</span></p>
                </button>
                <button className=" Hover text-white flex items-center  rounded-[50px] px-3 ">
                    <BiMale />
                    <p className="text-xs pl-2">Sign In <br /> <span className="text-base font-semibold">Accounts</span></p>
                </button>
                <Link to="/cart">  <button className=" text-white relative">
                    <p className="w-[1rem] h-[1rem] bg-[#FFC220] flex items-center justify-center rounded-full text-xs absolute left-4">{totalquantity}</p>
                    <AiOutlineShoppingCart className="text-3xl" />
                    <p className="text-xs">{totalpayment}$</p>
                </button></Link>
            </nav>

        </>
    )
}
export default Nav