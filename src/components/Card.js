import React from 'react'

const Card = ({ flag, name, capital, currency, continent }) => {
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
            <div className="group relative lg:w-[19rem] hover:scale-110 cursor-pointer"
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
                            <button onClick={redirect(name)}
                                className="bg-[#0111139c] rounded cursor-pointer flex items-center justify-center font-medium h-12 text-lg leading-10 mt-2 py-0 px-3 text-white whitespace-no-wrap w-full hover:bg-[#ffffff0d] hover:border-white hover:text-white duration-75"><i
                                    className="fa-solid fa-arrow-up-right-from-square mr-3"></i>
                                View</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;
