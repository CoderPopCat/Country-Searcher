import React from 'react'

function CountryInfo({ icon, heading, info }) {
    return (
        <>
            <div className='country-info bg-[#ffffff0d] rounded-lg w-max p-3 flex gap-4 items-center justify-between'>
                <i className={`${icon} text-[#7760fe] text-5xl`}></i>
                <div className="flex-col items-center justify-center">
                    <h1 className="text-3xl text-left font-bold text-gray-200 flex gap-2 justify-left items-center">
                        {heading}<span className="text-[#7760fe]">:</span>
                    </h1>
                    <p class="text-lg text-left">
                        {info}
                    </p>
                </div>
            </div>
        </>
    )
}

export default CountryInfo;
