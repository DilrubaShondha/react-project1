import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountry, handleVisitedFlags }) => {
    console.log(country)
    const {name, flags, population, area, cca3} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }
    return (
        <div className={`country ${visited ? 'visited':'non-visited'}`}>
           <h3>name: {name.common}</h3> 
           <img src={flags.png} alt="" />
           <p>Population: {population}</p>
           <p>Area: {area}</p>
           <p>Code: {cca3}</p>
           <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button>
           <button onClick={() => handleVisitedFlags(flags)}>Mark Visited Flags</button>
           <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
           {visited ? ' I have Visited' : 'I want to Go'}
        </div>
    );
};

export default Country;


