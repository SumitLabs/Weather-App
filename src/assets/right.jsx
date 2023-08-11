import { useState } from 'react'
import { useEffect } from 'react';
import './right.css';
function right() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Delhi");
  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=5b36f3cb65b3dea53c1e35da5ff7010c`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
    }
    fetchApi();
  }, [search])
  
   const weatherType =[
   {
    type:"clear",
    img:"https://cdn-icons-png.flaticon.com/512/1197/1197102.png",
   },
   {
    type:"smoke",
    img:"https://cdn-icons-png.flaticon.com/512/4380/4380458.png",
   },
   {
    type:"mist",
    img:"https://cdn-icons-png.flaticon.com/512/4005/4005901.png",
   },
   {
    type:"drizzle",
    img:"https://cdn-icons-png.flaticon.com/512/3076/3076129.png",
   },
   ];
    function icon (i){
    switch(i){
      case 'clear':
        return <img src={weatherType[0].img} alt="icon" />
      case 'smoke':
        return <img src={weatherType[1].img} alt="icon" />
      case 'mist':
        return <img src={weatherType[3].img} alt="icon" />
      case 'drizzle':
        return <img src={weatherType[4].img} alt="icon" />
    }
    }
  return (
    <div className="right">
    <div className="icon">
    <img src={weatherType[0].img} alt="icon" />
    </div>
  
    <div className="search">
    <input type="search" className='inputFeild'  value={search} onChange={(e) => {
            setSearch(e.target.value)
          }} />
          <i className="fa-solid fa-magnifying-glass"></i>
    </div>
    {
    !city? ('') :(<>

   <div className="location"><h4>{search}</h4> <hr  className='hr'/></div>
  
   <div className="list">
      <ul>
        <li>Temperature - {city.temp}°cel</li>
        <li>pressure - {city.pressure}</li>
        <li>Humidity - {city.humidity}</li>
      </ul>
    </div> 
   
   </>)}
    </div>
  )
}

export default right