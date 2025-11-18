import "../index.css"
import "./NavBar.css"
export default function Navbar(){
    return(
    <nav class="sticky top-0 h-20" >
        <ul class="flex justify-evenly font-sans h-40">
            <li>
                <a class="inline-block">Home</a>
            </li>
            <li>
                <a class="inline-block">Analysis</a>
            </li>
            <li>
                <a class="inline-block">Upload</a>
            </li>
        </ul>
    </nav>
    )
}