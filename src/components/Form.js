import React from 'react'


const Form = ({ api_call , api_data}) => {

    return (
        <div className="form_div" >

            <form onSubmit={api_call} className="form">

                <input type="text" name="loacation" value={api_data} placeholder="Search..." className="user_input"/>

                <input type="submit" value="Submit" className="button"/>
            </form>
            
        </div>
    )
}

export default Form
