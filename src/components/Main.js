import React, { useState } from 'react'
import Data from "./Data";
import axios from "axios";
import Form from "./Form"

const Main = () => {
    const [api_data, setapi_data] = useState("")
    const [location, setlocation] = useState("")
    const [error, seterror] = useState("")
    const api_call = async (e) => {
        e.preventDefault();
        const input = e.target.elements.loacation.value
        if (!input) return seterror("Plz Enter The Input"), setlocation(""), setapi_data("")
        const url = `http://api.weatherapi.com/v1/current.json?key=d56a423a49ae438996555051211505&q=${input}&aqi=no`
        const request = axios.get(url)
        const response = await request
        setapi_data(response.data.current);
        setlocation(response.data.location.name)
        e.target.reset();

    }

    return (
        <div className="container">

            <Form api_call={api_call} />
            <Data api_data={api_data} location={location} error={error} />


        </div>
    )
}

export default Main
