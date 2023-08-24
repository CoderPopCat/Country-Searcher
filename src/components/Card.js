import React from 'react'

const Card = ({ flag, name, capital, currency, continent, coords }) => {
    const continents = {
        'as': '🌏 Asia',
        'eu': '🌍 Europe',
        'af': '🌍 Africa',
        'na': '🌎 North America',
        'sa': '🌎 South America',
        'oc': '🌏 Oceania',
        'an': '🌎 Antarctica',
    };
    const continentEmoji = continents[continent];
    const redirect = (name) => () => window.location.href = `/country/${name}`
    return (
        <>
            <div data-aos="fade-up" data-aos-delay='100' data-aos-easing='ease-in-out' data-aos-duration='1500' className="group relative lg:w-[19rem] hover:scale-110 cursor-pointer"
                style={{ transitionDuration: '0.5s' }}>
                <div
                    className="flex flex-col justify-between items-center rounded-lg shadow-lg bg-[#ffffff0d] card">
                    <img className="rounded-t-lg w-full" src={flag}
                        alt="imag" style={{ boxShadow: 'inset 0 -1px 0 0 hsla(0,0%,100%,0.1)' }} />
                    <div className="p-4 md:p-4 w-full">
                        <h1 className="text-2xl font-bold text-white">
                            {name}
                        </h1>
                        <p className="mt-2 text-sm text-gray-400">
                            <span className="text-white">Capital -</span> {capital}
                            <br />
                            <span className="text-white">Currency -</span> {currency}
                        </p>
                        <div className="flex flex-col justify-between mt-3">
                            <div className="flex justify-end">
                                <div className='continent bg-[#ffffff0d] rounded-lg w-max p-0.5'>
                                    <h1 className="text-lg text-right font-bold text-gray-200 md:text-xl">
                                        {continentEmoji}
                                    </h1>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <button onClick={redirect(name)}
                                    className="bg-[#0111139c] rounded cursor-pointer flex items-center justify-center font-medium h-12 text-lg leading-10 mt-2 py-0 px-3 text-white whitespace-no-wrap w-full hover:bg-[#ffffff0d] hover:border-white hover:text-white duration-75"><i
                                        className="fa-solid fa-arrow-up-right-from-square mr-3"></i>
                                    View</button>
                                    <button onClick={() => window.open(`https://www.google.com/maps/place/${name}/@25.0314752,55.2343264,6460m/data=!3m2!1e3!4b1?entry=ttu`, '_blank')}
                                    className="bg-[#0111139c] rounded cursor-pointer flex items-center justify-center font-medium h-12 text-lg leading-10 mt-2 py-0 px-3 text-white whitespace-no-wrap w-full hover:bg-[#ffffff0d] hover:border-white hover:text-white duration-75"><i
                                        className="fa-solid fa-location-dot mr-3"></i>
                                    Map</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;
