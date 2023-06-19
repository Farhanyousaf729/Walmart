import React, { useEffect, useState } from "react";
const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        const saved = localStorage.getItem(key);
        return saved !== null ? JSON.parse(saved) : defaultValue

    });
    // console.log(value);
   
    useEffect(() => {

        localStorage.setItem(key, JSON.stringify(value))

    }, [key, value])

    const push =(item)=>{
          setValue((prevValue)=>[...prevValue,item])
    }
    return [value,push]
}
export default useLocalStorage