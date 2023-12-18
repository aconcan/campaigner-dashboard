import React from 'react';
// import { useNavigate } from "react-router-dom";


function SidebarButton({ button }) {    
    // const navigate = useNavigate();
    
    const handleClick = () => {
        window.location.pathname = button.Link
        // navigate.push( button.Link );
    }

    return (
        <button className='sidebarbutton' id={window.location.pathname === button.Link ? 'active' : ''} onClick={ handleClick }> 
            <div className='sidebarbutton-icon'> 
                { button.Icon } 
            </div>
            <div className='sidebarbutton-text'> 
                { button.Title } 
            </div>
        </button>
    )
};

export default SidebarButton;