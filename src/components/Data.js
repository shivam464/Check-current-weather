import React from 'react'

import images from "../img/imgg.jpg"

const Data = ({ api_data, location, error }) => {
    const { temp_c, cloud, humidity, wind_kph, pressure_in } = api_data
    return (
        <div className="main_div">
            <section>
                <div className="center_div">
                    <div className="image_section">
                        <img src={images} alt="image_loading" />
                    </div>

                    {error && <div className="error_div">
                        <h1>{error}</h1>
                    </div>}

                    {!error && <div className='weather_details'>

                        <h2>Weather Details</h2>
                        {api_data && <div className="city_name">
                            <h3>Weather of <span>{location}</span></h3>
                        </div>}
                        {api_data && <div className="grid_section">
                            <div className="data_name">
                                <p>Temperature</p>
                                <p>Cloudy</p>
                                <p>Humidity</p>
                                <p>Wind</p>
                                <p>Pressure</p>
                            </div>

                            <div className="data_value">
                                <p>{temp_c}&deg;C</p>
                                <p>{cloud}%</p>
                                <p>{humidity}%</p>
                                <p>{wind_kph}km/h</p>
                                <p>{pressure_in}</p>
                            </div>
                        </div>}
                    </div>}

                </div>
            </section>
        </div>
    )
}

export default Data
