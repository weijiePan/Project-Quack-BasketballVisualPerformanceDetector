import "./Upload.css";
import FrameDisplay from "../components/FrameDisplay";
export default function Upload(){
    return(
        <main class='overflow-hidden h-3/2 flex flex-col items-center'>
            <section id="VideoContainer" class=' h-1/3 w-full flex justify-center items-center '>
               <video class="bg-black w-230 h-130">
                
               </video>
            </section>
            <span class="w-full h-2.5 bg-white"></span>
            <section id="FramesContainer" class='bg-gray-900 h-1/4 w-9/10 rounded-md flex items-center justify-evenly'>
                <svg transform="rotate(90)" fill="green">
                    <polygon points="0,0 100,0 50,100" />
                </svg>
                <FrameDisplay></FrameDisplay>
                <svg transform="rotate(-90)" fill="green">
                    <polygon points="0,0 100,0 50,100" />
                 </svg>
            </section>
            <button type="submit" class='bg-gray-300 rounded-xl w-25 h-10 mt-2'>Submit</button>
            

        </main>
    )
}