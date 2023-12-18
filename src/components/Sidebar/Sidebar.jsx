import SidebarButton from "./SidebarButton";
import { SidebarData } from "./SidebarData";
import './Sidebar.css';

function Sidebar () {    
    return (
            <div className='sidebar' >
                <div className='header'>
                    <div className='header-logo'>
                        <img src='kayak.png' alt='logo'></img>
                    </div>
                    <div className='header-text'>
                        <h1> Campaigner </h1>
                    </div>
                </div>

                <br></br>
                {
                    SidebarData.map((button) => 
                        <SidebarButton button = {button} />
                )}
            </div>
    )
};

export default Sidebar;