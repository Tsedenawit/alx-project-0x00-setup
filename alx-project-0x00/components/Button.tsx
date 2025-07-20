import React from "react"
import { butprops } from "@/interfaces";
const Button: React.FC<butprops>= ({styles})=>{
    return(
        <div>
            <button className="rounded-sm, rounded-md, rounded-full">{styles}</button>
        </div>
    )
}
export default Button;