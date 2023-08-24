import React from 'react'
import { useParams } from 'react-router-dom'
import Countries from '../constants/countries.json';
import countryCoords from '../constants/country-coords.json';
import CountryInfo from './CountryInfo';
import { Tooltip } from 'react-tooltip';

const Country = () => {
    const { name } = useParams();
    const country = Countries.find(c => c.country === name);
    if (!country) return <div style={{ fontWeight: '700', height: '300px' }} className='text-[60px] text-center text-white pt-[23vh] App'>No Country Found 🤣💀</div>
    const continents = {
        'as': '🌏 Asia',
        'eu': '🌍 Europe',
        'af': '🌍 Africa',
        'na': '🌎 North America',
        'sa': '🌎 South America',
        'oc': '🌏 Oceania',
        'an': '🌎 Antarctica',
    };
    const continentEmoji = continents[country.continent];
    const neighbors = country.neighbors.map(n => countryCoords.filter(c => c.country.toLowerCase() === n.toLowerCase())[0]);
    console.log(neighbors)
    return (
        <>
            <div className="flex flex-col App" style={{ margin: '0', paddingTop: '18vh' }}>
                <button onClick={() => window.scrollTo({ top: document.querySelector('.nav').offsetTop, behavior: 'smooth' })} className="totop fixed right-2 bottom-6 cursor-pointer border-none rounded-[50%] w-15 h-15 p-5 z-50 bg-[#ffffff0d] flex justify-center items-center hidden text-xl" style={{ backdropFilter: 'blur(8px)', boxShadow: '0 0 14px rgb(0 0 0 / 12%)' }}>
                    <i className="fa-solid fa-arrow-up"></i>
                </button>
                <section
                    className="pt-14 mt-[32px] mb-[50px] pb-12 px-5 antialiased text-center flex justify-center items-center">
                    <div className="content">
                        <div className="p-6 w-full lg:w-[90vw] bg-[#ffffff0a] rounded-lg border border-[#333] flex flex-col relative" style={{ backdropFilter: 'blur(5px)' }}>
                            <div className="everything-else p-6 -w-[100%] rounded-lg flex flex-col lg:flex-row">
                                <div className="back absolute top-5 left-5 bg-[#ffffff0d] text-white rounded-lg p-2 px-3 cursor-pointer hover:scale-125" style={{ transition: 'all 0.5s ease' }} onClick={() => window.location.href = '/'}>
                                    <i className="fa-solid fa-arrow-left"></i>
                                </div>
                                <div className="flex flex-col lg:flex-row justify-between sm:px-6 lg:px-8 img-container img relative items-center">
                                    <div className="images mb-6">
                                        <img className="max-w-[19rem] rounded-lg img-blur" src={country.flag} alt="" data-aos='zoom-in' data-aos-easing='ease-in-out' data-aos-duration='900' />
                                        <img className="max-w-[19rem] rounded-lg absolute" style={{ transform: 'translateY(-100%)' }} src={country.flag} alt="" data-aos='zoom-in' data-aos-easing='ease-in-out' data-aos-duration='900' />
                                    </div>
                                    <div className="text items-left lg:ml-[4rem] flex flex-col justify-start space-y-5">
                                        <a className="mb-2 text-5xl font-bold tracking-tight text-white text-center lg:text-left country-headingg" href={`https://www.google.com/maps/place/${country.country}/@25.0314752,55.2343264,6460m/data=!3m2!1e3!4b1?entry=ttu`} style={{ textDecoration: '#7760fe solid underline', cursor: 'pointer' }} target="_blank" data-aos='fade-left' data-aos-easing='ease-in-out' data-aos-duration='900'>
                                            {country.country}
                                        </a>
                                        <div className="country-info-container gap-5" data-aos='fade-left' data-aos-easing='ease-in-out' data-aos-duration='900'>
                                            <CountryInfo heading='Capital' info={country.capital} icon='fa-solid fa-location' />
                                            <CountryInfo heading='Currency' info={country.currency} icon='fa-solid fa-coins' />
                                            <CountryInfo heading='Continent' info={continentEmoji} icon='fa-solid fa-globe' />
                                            <CountryInfo heading={`Language${country.native_language.length > 1 ? 's' : ''}`} info={country.native_language.join(", ")} icon='fa-solid fa-language' />
                                            <CountryInfo heading='Area' info={country.area.km2.toLocaleString() + 'km2'} icon='fa-solid fa-ruler-combined' />
                                            <CountryInfo heading='Landlocked?' info={country.is_landlocked ? 'Yes' : 'No'} icon='fa-solid fa-lock' />
                                            <CountryInfo heading='Famous For' info={country.famous_for.includes(",") && country.famous_for.split(", ").length > 5 ? country.famous_for.split(", ").slice(5).join(", ") : country.famous_for} icon='fa-regular fa-star' />
                                            <CountryInfo heading='Driving Direction' info={country.drive_direction.charAt(0).toUpperCase() + country.drive_direction.slice(1)} icon='fa-solid fa-car' />
                                            <Tooltip id="country-name" />
                                            <CountryInfo heading='Neighbors' info={<div className='flex flex-row gap-2'>{neighbors.map(n => {
                                                return (<img data-tooltip-id="country-name" data-tooltip-content={n.name} data-tooltip-float={true} src={n.icon} className='neighbor-icon w-8' key={n.name} />)
                                            })}</div>} icon='fa-solid fa-globe' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Country
