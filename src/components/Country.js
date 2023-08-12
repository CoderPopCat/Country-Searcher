import React from 'react'
import { useParams } from 'react-router-dom'
import Countries from '../constants/countries.json';
import CountryInfo from './CountryInfo';

const Country = () => {
    const { name } = useParams();
    const country = Countries.find(c => c.country === name);
    if (!country) return <div style={{ fontWeight: '700', height: '300px' }} className='text-[60px] text-center text-white pt-[26vh] App'>No Country Found 🤣💀</div>
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
    return (
        <>
            <div className="flex flex-col App" style={{ margin: '0', paddingTop: '18vh' }}>
                <section
                    class="pt-14 mt-[32px] mb-[50px] pb-12 px-5 antialiased text-center flex justify-center items-center">
                    <div class="content">
                        <div class="p-6 w-full lg:w-[90vw] bg-[#ffffff0a] rounded-lg border border-[#333] flex flex-col relative" style={{ backdropFilter: 'blur(5px)' }}>
                            <div class="everything-else p-6 -w-[100%] rounded-lg flex flex-col lg:flex-row">
                                <div class="flex flex-col lg:flex-row justify-between sm:px-6 lg:px-8 img-container img relative items-center">
                                    <div className="images">
                                        <img class="max-w-[19rem] rounded-lg img-blur" src={country.flag} alt="" data-aos='zoom-in' data-aos-easing='ease-in-out' data-aos-duration='900' />
                                        <img class="max-w-[19rem] rounded-lg absolute" style={{ transform: 'translateY(-100%)' }} src={country.flag} alt="" data-aos='zoom-in' data-aos-easing='ease-in-out' data-aos-duration='900' />
                                    </div>
                                    <div class="text items-left lg:ml-[4rem] flex flex-col justify-start space-y-5">
                                        <h5 class="mb-2 text-5xl font-bold tracking-tight text-white text-center lg:text-left" style={{ textDecoration: '#7760fe wavy underline' }} data-aos='fade-left' data-aos-easing='ease-in-out' data-aos-duration='900'>
                                            {country.country}
                                        </h5>
                                        <div className="flex lg:flex-row flex-col gap-5 items-center justify-left flex-wrap" data-aos='fade-left' data-aos-easing='ease-in-out' data-aos-duration='900'>
                                            <CountryInfo heading='Capital' info={country.capital} icon='fa-solid fa-location' />
                                            <CountryInfo heading='Currency' info={country.currency} icon='fa-solid fa-coins' />
                                            <CountryInfo heading='Continent' info={continentEmoji} icon='fa-solid fa-globe' />
                                            <CountryInfo heading={`Language${country.native_language.length > 1 ? 's' : ''}`} info={country.native_language.join(", ")} icon='fa-solid fa-language' />
                                            <CountryInfo heading='Area' info={country.area.km2.toLocaleString() + 'km2'} icon='fa-solid fa-ruler-combined' />
                                            <CountryInfo heading='Landlocked?' info={country.is_landlocked ? 'Yes' : 'No'} icon='fa-solid fa-lock' />
                                            <CountryInfo heading='Famous For' info={country.famous_for.includes(",") && country.famous_for.split(", ").length > 5 ? country.famous_for.split(", ").slice(5).join(", ") : country.famous_for} icon='fa-regular fa-star' />
                                            <CountryInfo heading='Driving Direction' info={country.drive_direction.charAt(0).toUpperCase() + country.drive_direction.slice(1)} icon='fa-solid fa-car' />
                                            <CountryInfo heading='Neighbors' info={country.neighbors.map(c => c.toUpperCase()).join(", ")} icon='fa-solid fa-globe' />
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
