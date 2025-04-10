import { useEffect, useState } from 'react';
import WeatherCard from './WeatherCard';


function Temp() {

    const [text, setText] = useState("");
    const [weatherData, setWeatherData] = useState({});

    const funText = (e)=>{
        setText( e.target.value);
    }

    const getInfo = async()=>{
        try{
            let url = "https://api.openweathermap.org/data/2.5/weather?lat=34&lon=12&appid=c568154629118a17070b629227859395";
            const res = await fetch(url);
            const data = await res.json();

            console.log(data)
            const {temp, humidity, pressure,sea_level} = data.main;
            const {main} = data.weather[0];
            const{speed} = data.wind;
            const{sunset} = data.sys;
            console.log(data)
            
            const myWeatherData= {
                temp,
                humidity,
                pressure,
                sea_level,
                main,
                speed,
                sunset
            }

            setWeatherData(myWeatherData);
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getInfo();
    },[]);

    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input type="search" placeholder="search..." id="search" value={text} onChange={funText} className="searchTerm" />
                    <button className="searchButtom" type="button" onClick={getInfo}> Search</button>
                </div>
            </div>

            <WeatherCard weatherData = {weatherData} />

        </>
    );
}

export default Temp;
