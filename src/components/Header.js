import React from 'react'

const Header = ({ name, icon }) => {
    return (<>
      <div className="nav">
        <div className="nav-content">
            <img src={icon} alt="Icon" className="nav-icon" />
            <h1 className="nav-title">{name}</h1>
        </div>
      </div>
    </>)
}

export default Header
