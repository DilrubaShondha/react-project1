import './Country.css'
const Country = ({country}) => {
    console.log(country)
    const {name, flags} = country;
    return (
        <div className='country'>
           <h3>name: {name.common}</h3> 
           <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;



// import './Country.css';

// const Country = ({ country }) => {
//     console.log(country);
    
//     const { name, flags } = country;  // Destructuring flags along with name
    
//     return (
//         <div className='country'>
//             <h3>Name: {name.common}</h3>
//             <img src={flags.png} alt={`${name.common} flag`} />  {/* Corrected the flag image source */}
//         </div>
//     );
// };

// export default Country;
