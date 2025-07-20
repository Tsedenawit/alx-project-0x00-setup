import React from "react"
import { butprops } from "@/interfaces";
const Button: React.FC<butprops>= ({title})=>{
    return(
        <div>
            <button className="rounded-sm, rounded-md, rounded-full">{title}</button>
        </div>
    )
}
export default Button;