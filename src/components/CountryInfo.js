import React from 'react'

function CountryInfo({ icon, heading, info }) {
    return (
        <>
            <div className='country-info bg-[#ffffff0d] rounded-lg w-full p-2 flex gap-4 items-center justify-left'>
                <i className={`${icon} text-[#7760fe] text-[2.25rem] pl-2`}></i>
                <div className="flex-col items-center justify-center" style={{paddingRight:'0.45rem'}}>
                    <h1 className="text-lg text-left font-bold text-gray-200 flex gap-2 justify-left items-center">
                        {heading}
                    </h1>
                    <p className="text-2xl text-left">
                        {info}
                    </p>
                </div>
            </div>
        </>
    )
}

export default CountryInfo;
