import "../index.css";
import "./NavBar.css";
import { SlMenu } from "react-icons/sl";
import { useState } from "react";

export default function Navbar(){
  const [navOn, changeNavOn] = useState(false);
  if(navOn){
    console.log("nav on");
  }else{
    console.log("nav off");
  }
    return(
    <nav class="sticky top-0 flex  items-center font-sans h-20"  onMouseLeave={(e)=>{changeNavOn(false)}} >
        <SlMenu id = "menu" class="ml-20 hover:rotate-90 transition-transform: duration-750 " onMouseEnter={(e)=>{changeNavOn(true)}} ></SlMenu>
        {navOn?
            <ul class="flex items-center font-sans h-20  transition-transform: translate-x-3.5 duration-75 gap-x-2">
                <li>
                    <a class="inline-block">Home</a>
                </li>
                <li>
                    <a class="inline-block">Analysis</a>
                </li>
                <li>
                    <a class="inline-block">Upload</a>
                </li>
            </ul>:null}
    </nav>
    )
}