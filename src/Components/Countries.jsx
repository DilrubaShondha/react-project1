import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import './Countries.css'


const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] =useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res =>res.json())
        .then(data =>setCountries(data));
    },[])

const handleVisitedCountry = country =>{
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }
const handleVisitedFlags = flag =>{
        console.log('flag added')
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }
    return (
       <div>
        <h3>countries: {countries.length}</h3>
        <div className="length">
            <h5>Visited Country: {visitedCountries.length} </h5>
            <ul>
                {
                    visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                }
            </ul>
        </div>
        <div className="flag-container">
            {visitedFlags.map(flag => <img className="flag-size" src={flag.png}></img>)}
        </div>
         <div className="country-container">
            {
                countries.map(country =><Country
                     key={country.cca3}
                     handleVisitedCountry={handleVisitedCountry}
                     handleVisitedFlags ={handleVisitedFlags}
                     country={country}></Country>)
            }
        </div>
       </div>
    );
};

export default Countries;