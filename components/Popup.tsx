export default function Popup(props){
    return (
        <div id="popUpEl" className="bg-black bg-opacity-75 fixed px-4 py-2 rounded-lg z-10">
            <h2 className="text-white text-xs">
                <span id="populationEl"></span>
                <span> Population</span>
            </h2>
            <p id="populationValueEl" className="text-white font-bold text-lg">300 million</p>
        </div>
    )
}