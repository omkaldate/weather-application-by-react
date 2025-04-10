import React from "react";
import { WiDaySunny } from 'react-icons/wi';
import { WiSunset } from 'react-icons/wi';
import { WiRain } from 'react-icons/wi';
import { WiHumidity } from 'react-icons/wi';
import { WiBarometer } from 'react-icons/wi';
import { WiStrongWind } from 'react-icons/wi';
import { FaWater } from 'react-icons/fa';
const WeatherCard = (props) => {

    const { temp,
        humidity,
        pressure,
        sea_level,
        main,
        speed,
        sunset } = props.weatherData;
    return (
        <>
            <article className="widges">
                <div className="weathericon">
                    <WiDaySunny size={48} color="gold" />
                </div>

                <div className='weatherInfo'>
                    <div className='temperature'>
                        <span>{((temp - 273.15) * 9 / 5 + 32).toFixed(1)}&deg;F</span>

                    </div>

                    <div className='description'>
                        <div className='weatherCondition'>Cloudy</div>
                        <div className='place'>Pune,India</div>
                    </div>

                </div>

                <div className='date'>{new Date().toLocaleString()}</div>

                <div className='extraTemperature'>
                    <div className='tempMinMax'>
                        <div className='twoSidedSection'>
                            <p><WiSunset size={50} color="orange" /></p>
                            <p className='extraInfoLeftSide'>
                                {new Date(sunset * 1000).toLocaleTimeString()} <br />Sunset
                            </p>
                        </div>

                        <div className='twoSidedSection'>
                            <p><WiRain size={50} color="blue" /></p>
                            <p className='extraInfoLeftSide'>{main} <br />weather mood</p>
                        </div>

                        <div className='twoSidedSection'>
                            <p><WiHumidity size={50} color="#00bcd4" /></p>
                            <p className='extraInfoLeftSide'>{humidity} <br />Humidity</p>
                        </div>

                        <div className='twoSidedSection'>
                            <p><WiBarometer size={50} color="#607d8b" /></p>
                            <p className='extraInfoLeftSide'>
                                {pressure} hPa <br />Pressure
                            </p>
                        </div>

                        <div className='twoSidedSection'>
                            <p><WiStrongWind size={50} color="#4caf50" /></p>
                            <p className='extraInfoLeftSide'>
                                {(speed * 3.6).toFixed(1)} km/h <br />Speed
                            </p>
                        </div>

                        <div className='twoSidedSection'>
                            <p><FaWater size={40} color="#03a9f4" /></p>
                            <p className='extraInfoLeftSide'>{sea_level} <br />Sea Level</p>
                        </div>
                    </div>
                </div>

            </article>
        </>
    )
}


export default WeatherCard;