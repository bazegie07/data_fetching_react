import React, {useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
export default () => {

    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        axios.get('https://api.spacexdata.com/v3/launches').then(response => setLaunches(response.data))
    }, []);


    return(
        launches.map(launch =>(
            <div key={launch.flight_number}>
                <Link to={"/launches/" + launch.flight_number}>
                <h1>{launch.mission_name}</h1>
                </Link>
                <p>{launch.launch_date_local}</p>
            </div>
        ))
    ) 
}