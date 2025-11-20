import "./Upload.css";
import FrameDisplay from "../components/FrameDisplay";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
export default function Upload(){
    return(
        <main class='overflow-hidden h-3/2 flex flex-col items-center'>
            <section id="VideoContainer" class=' h-1/3 w-full flex justify-center items-center '>
               <video class="bg-black w-2/5 h-3/4">
               </video>
            </section>
            <span class="w-full h-2.5 bg-white"></span>
            <section id="FramesContainer" class='bg-gray-700 h-1/4 w-5/10 rounded-md flex items-center justify-evenly'>
                <SlArrowLeft class="fill-amber-50"></SlArrowLeft>
                <FrameDisplay></FrameDisplay>
                <SlArrowRight class="fill-amber-50"></SlArrowRight>
            </section>
            <button type="submit" class='bg-gray-300 rounded-xl w-25 h-10 mt-2'>Submit</button>
            

        </main>
    )
}