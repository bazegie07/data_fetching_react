import  React, { useEffect, useState } from 'react';
import axios from 'axios';
export default ({ id }) => {
    const [launch, setLaunch]= useState(null);

    useEffect(()=>{
        axios.get ('https://api.spacexdata.com/v3/launches/' + id)
        .then(response => setLaunch(response.data))

    }, []);

    if(!launch){
        return <>Loading...</>;
    }

    return (
        
            <div>
                <p>{launch.flight_number}</p>
                <h4>{launch.mission_name}</h4>
                <p>{launch.launch_date_local}</p>
            </div>
        
    );
}