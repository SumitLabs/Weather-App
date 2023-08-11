import { useState, useEffect } from 'react';
import axios from 'axios';
import './left.css';
function left() {
    const [currLocation,setCurrLocation]=useState({});
    useEffect(()=>{
    getLocation();
    },[]);
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Delhi");
    useEffect(() => {
        const fetchApi = async () => {
          const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=5b36f3cb65b3dea53c1e35da5ff7010c`;
          const response = await fetch(url);
          const resJson = await response.json();
          setCity(resJson.main);
          console.log(resJson.main);
        }
        fetchApi();
      }, [search])
    const getLocation=async()=>{
        const location =await axios.get('https://ipapi.co/json');
        console.log(location.data);
        setCurrLocation(location.data);
    }

    let time = new Date().toLocaleTimeString();
    let date = new Date().toLocaleDateString();
    let day = new Date().getDay();
    const [ctime, setCtime] = useState(time);
    const UpdateTime = () => {
        time = new Date().toLocaleTimeString();
        setCtime(time)
    }
    setInterval(UpdateTime, 1000);
    function getDayName(daynumber) {
        let dayname = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sunday'];
        return dayname[daynumber];
    }
    return (
    
        <div className="left">
           
            <div className="time-date">

                <div className="time">{ctime}</div>
                <div className="d-d">
                    <div className="day">{getDayName(day)}</div>
                    <div className="date">{date}</div>
                </div>
            </div>

            {/* <div className="temp">
                <h1>{city.temp}°cel</h1>
                <h3 className='tempmin_mex'>
                    min: 33°cel | max: 44°cel
                </h3>
            </div> */}
            <div className="place">
                <div className="state">{currLocation.city}</div>
                <div className="country">{currLocation.country}</div>
            </div>
        </div>
    )
}

export default left