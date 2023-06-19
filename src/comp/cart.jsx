import React, { useEffect, useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai"

const Cart = () => {
    const [localarry, setlocalarry] = useState(() => {
        const store = localStorage.getItem(`data`)
        return store ? JSON.parse(store) : []
    })
    const [totalpayment, settotalpyment] = useState("")
    const [totalquantity, settotalquantity] = useState("")
    // console.log(localarry);
    useEffect(() => {
        let i = 0;
        let total = 0;
        localarry.map((e, index) => {
            total = total + e.DiscountPrice
            //  const actualTotal = Number(total.toFixed(2))
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
    const handleDel = (index) => {
        let x = localarry
        x.splice(index, 1)
        localStorage.setItem(`data`, JSON.stringify(x))
        setlocalarry([...x])
    }
    return (
        <>
        
            <p className="text-center font-bold text-5xl py-10 ">"CART"</p>
            <table className="  w-[70%] mx-auto shadow-lg">
                <thead className="">
                    <tr className="">
                        <th>Sr</th>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Discout</th>
                        <th>Dis Price</th>
                    </tr>
                </thead>
                <tbody className="text-center">

                    {
                        localarry ? localarry.map((ele, index) => {
                            return <tr className="">
                                <td>{index + 1}</td>
                                <td>{<img className="w-[4rem] h-[4rem]" src={ele.Pic} alt="" />}</td>
                                <td>{ele.Name}</td>
                                <td>{ele.Price}$</td>
                                <td>{ele.Discount}%</td>
                                <td>{ele.DiscountPrice}$</td>
                                <td onClick={() => { handleDel(index) }}><AiTwotoneDelete /></td>
                            </tr>
                        }) : <></>
                    }

                </tbody>
            </table>

            <div className="flex w-[70%] mx-auto justify-end font-semibold px-4">
                <p className="pr-8">Total Quantity : {totalquantity}</p>
                <p>Total Paymant : {totalpayment}$</p>
            </div>


        </>
    )
}
export default Cart