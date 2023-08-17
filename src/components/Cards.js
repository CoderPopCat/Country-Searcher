import React, { useEffect, useState } from 'react';
import Info from '../constants/countries.json';
import Coords from '../constants/country-coords.json';
import Card from './Card';
import {getDistance} from 'geolib';

const Cards = ({ }) => {
    const [countries, setCountries] = useState(Info);
    const [open, setOpen] = useState(false);
    const [country1, setCountry1] = useState({ country: 'Country 1', flag: 'https://placehold.co/224x160' });
    const [country2, setCountry2] = useState({ country: 'Country 2', flag: 'https://placehold.co/224x160' });
    const [result, setResult] = useState(null);
    const calculateDistance = () => {
        const coords1 = Coords.filter(c => c.name === country1.country)[0];
        const coords2 = Coords.filter(c => c.name === country2.country)[0];
        const lat1 = coords1.latitude;
        const lon1 = coords1.longitude;
        const lat2 = coords1.latitude;
        const lon2 = coords2.longitude;
        console.log(coords1, coords2, lat1, lon1, lat2, lon2)
        setResult((getDistance(
            { latitude: lat1, longitude: lon1 },
            { latitude: lat2, longitude: lon2 }
        ) / 1000).toLocaleString() +  ' KM')
    }
    useEffect(() => {
        if (country1.country !== 'Country 1' && country2.country !== 'Country 2') calculateDistance();
    }, [country1, country2])
    return (
        <>
            <div className="main flex flex-col items-center relative">
                <button onClick={() => window.scrollTo({ top: document.querySelector('.nav').offsetTop, behavior: 'smooth' })} className="totop fixed right-2 bottom-6 cursor-pointer border-none rounded-[50%] w-15 h-15 p-5 z-50 bg-[#ffffff0d] flex justify-center items-center hidden text-xl" style={{backdropFilter:'blur(8px)', boxShadow: '0 0 14px rgb(0 0 0 / 12%)'}}>
                    <i className="fa-solid fa-arrow-up"></i>
                </button>
                {open && <div className="modal absolute mx-auto flex justify-center items-center" style={{ zIndex: '999', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 2px 15px 0px, 0 0 0 max(100vw, 100vh) #00000099' }}>
                    <div className="modal-content relative bg-[#011113] rounded-lg border border-[#333] flex flex-col" style={{ backdropFilter: 'blur(125px)', width: '80vw' }}>
                        <i className="fa-solid fa-xmark absolute right-0 m-4 text-gray-400 bg-[#ffffff0d] rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center hover:bg-gray-600 hover:text-white" onClick={() => setOpen(false)} style={{ zIndex: 100, cursor: 'pointer' }}></i>
                        <div className="everything-else pt-12 px-12 w-[100%] rounded-lg flex flex-col justify-around lg:flex-row">
                            <div className="flex flex-col justify-between sm:px-6 lg:px-8 img-container img relative items-center mb-[7vh] lg:w-[50%] borderdiv" style={{ borderRight: '2px solid #333' }}>
                                <div className="images mb-6">
                                    <img className="max-w-[19rem] rounded-lg img-blur" src={country1.flag} alt="" data-aos='zoom-in' data-aos-easing='ease-in-out' data-aos-duration='900' />
                                    <img className="max-w-[19rem] rounded-lg absolute" style={{ transform: 'translateY(-100%)' }} src={country1.flag} alt="" data-aos='zoom-in' data-aos-easing='ease-in-out' data-aos-duration='900' />
                                </div>
                                <div className="text items-center flex flex-col justify-start space-y-5">
                                    <a className="mb-2 text-5xl font-bold tracking-tight text-white text-center lg:text-left country-headingg" href={`https://www.google.com/maps/place/${country1.country}/@25.0314752,55.2343264,6460m/data=!3m2!1e3!4b1?entry=ttu`} style={{ textDecoration: '#7760fe solid underline', cursor: 'pointer' }}>
                                        {country1.country}
                                    </a>
                                </div>
                                <select onChange={(e) => setCountry1(Info.filter(c => c.country.toLowerCase() === e.target.value.toLowerCase())[0])} id="country1" className="mt-7 block w-full py-4 px-4 focus:outline-none mb-6 text-sm rounded-md bg-[#292929] text-white" style={{ fontWeight: '700' }}>
                                    <option disabled selected>Choose a country</option>
                                    {Info.map(c => {
                                        return (
                                            <option value={c.country}>{c.country}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="flex flex-col justify-between sm:px-6 lg:px-8 img-container img relative items-center mb-[7vh] lg:w-[50%]">
                                <div className="images mb-6">
                                    <img className="max-w-[19rem] rounded-lg img-blur" src={country2.flag} alt="" data-aos='zoom-in' data-aos-easing='ease-in-out' data-aos-duration='900' />
                                    <img className="max-w-[19rem] rounded-lg absolute" style={{ transform: 'translateY(-100%)' }} src={country2.flag} alt="" data-aos='zoom-in' data-aos-easing='ease-in-out' data-aos-duration='900' />
                                </div>
                                <div className="text items-center flex flex-col justify-start space-y-5">
                                    <a className="mb-2 text-5xl font-bold tracking-tight text-white text-center lg:text-center country-headingg" href={`https://www.google.com/maps/place/${country2.country}/@25.0314752,55.2343264,6460m/data=!3m2!1e3!4b1?entry=ttu`} style={{ textDecoration: '#7760fe solid underline', cursor: 'pointer' }}>
                                        {country2.country}
                                    </a>
                                </div>
                                <select onChange={(e) => setCountry2(Info.filter(c => c.country.toLowerCase() === e.target.value.toLowerCase())[0])} id="country2" className="mt-7 block w-full py-4 px-4 focus:outline-none mb-6 text-sm rounded-md bg-[#292929] text-white" style={{ fontWeight: '700' }}>
                                    <option disabled selected>Choose a country</option>
                                    {Info.map(c => {
                                        return (
                                            <option value={c.country}>{c.country}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="results-container mt-[-25px] pb-12">
                            <div className="results flex flex-col justify-center items-center">
                                <div className="result flex flex-col justify-center items-center">
                                    <div className="result-heading text-7xl font-bold text-white mb-2">Distance</div>
                                    <div className="result-info text-xl font-medium text-white"><span className="text-bold" style={{fontWeight: '700'}}>{country1.country}</span> to <span className="text-bold" style={{fontWeight: '700'}}>{country2.country}</span></div>
                                    <span className='text-[#7760fe] text-3xl' style={{fontWeight:'700'}}>{result && result}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                }
                <div className="search">
                    <label for="default-search" className="mb-2 text-md font-medium text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="lg:block hidden w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" className="block w-[100%] lg:w-[46%] p-4 pl-10 text-sm bg-[#021d21] border-gray-600 placeholder-gray-400 text-whitee focus:outline-none rounded-lg" placeholder="Search For A Country..." onChange={(e) => e.target.value.length === 0 ? setCountries(Info) : setCountries(countries.filter(c => c.country.toLowerCase().includes(e.target.value.toLowerCase())))} required />
                        <button onClick={() => setOpen(true)} type="button" className="flex justify-center items-center gap-2 mt-5 lg:mt-0 lg:absolute right-0 top-0 text-white bg-[#ffffff0d] focus:ring-4 focus:ring-[#021d21] focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 w-[255px] pl-3 text-center mr-2 mb-2" style={{
                            paddingLeft: '2.5rem',
                            padding: '0.8rem',
                            fontSize: '21px',
                            fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
                            backdropFilter: 'blur(8px)',
                            border: 'border: 2px solid #3333334f'
                        }}><i className="fa-solid fa-ruler text-[24px]"></i>Distance Calculator</button>
                    </div>
                </div>

                <div className="countries">
                    {countries.length > 0 ? countries.map((country) => {
                        return (
                            <Card key={country.country} flag={country.flag} name={country.country} capital={country.capital} currency={country.currency} continent={country.continent} coords={Coords.filter(c => c.name === country.country)} />
                        )
                    }) : <div style={{ fontWeight: '700', height: '300px' }} className='text-[60px] text-center text-white'>No Countries Found 😥</div>}
                </div>
            </div>
        </>
    )
}

export default Cards
