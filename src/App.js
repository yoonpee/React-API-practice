import react, {useEffect, useState} from 'react';
import axios from 'axios';
function App() {
  const [weather, setWeather] = useState(null);
  useEffect(()=>{
     axios.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=c91a324293a96409823db214a356d663')
     .then((data)=>{
       setWeather(data.data);
       console.log(data.data);
     })
     .catch((err)=>{
       console.log(err)
     })
  },[])
  return (
    <div>
     {weather && (
       <div>
         <h1>{weather.name}</h1>
         <h2>{weather.main.humidity}</h2>
         <h2>{weather.main.temp}%C</h2>
         <h2>but it feels like {weather.main.temp}%C</h2>
       </div>
     )}
      
    </div>
  )

}
export default App;
