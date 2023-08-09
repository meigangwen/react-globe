export default function Popup(props){
    return (
        <div id="popUpEl" className="bg-black bg-opacity-75 fixed px-4 py-2 rounded-lg">
            <h2 id="populationEl" className="text-white text-xs">Population</h2>
            <p id="populationValueEl" className="text-white font-bold text-lg">300 million</p>
        </div>
    )
}