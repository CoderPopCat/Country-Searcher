import React, { useState } from 'react';
import Info from '../constants/countries.json';
import Coords from '../constants/country-coords.json';
import Card from './Card';

const Cards = ({ }) => {
    const [countries, setCountries] = useState(Info);
    return (
        <>
            <div className="main flex flex-col">
                <div className="search">
                    <label for="default-search" className="mb-2 text-md font-medium text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" className="block w-full lg:w-[46%] p-4 pl-10 text-sm bg-[#021d21] border-gray-600 placeholder-gray-400 text-whitee focus:outline-none rounded-lg" placeholder="Search For A Country..." onChange={(e) => e.target.value.length === 0 ? setCountries(Info) : setCountries(countries.filter(c => c.country.toLowerCase().includes(e.target.value.toLowerCase())))} required />

                    </div>
                </div>

                <div className="countries">
                    {countries.length > 0 ? countries.map((country) => {
                        return (
                            <Card key={country.country} flag={country.flag} name={country.country} capital={country.capital} currency={country.currency} continent={country.continent} coords={Coords.filter(c => c.name === country.country)} />
                        )
                    }) : <div style={{fontWeight: '700', height: '300px'}} className='text-[60px] text-center text-white'>No Countries Found 😥</div>}
                </div>
            </div>
        </>
    )
}

export default Cards
