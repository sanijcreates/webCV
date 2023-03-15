import React, { useState } from 'react';
import './Header.css';

function Header() {
    const [Toggle, setToggle] = useState(false);
    return(
        <header className='header'>
            <nav className='nav container'>
                <a href ="index.html" className='nav_logo'>SANIJ</a>
                <div className= {Toggle ? "nav_menu show-menu" : "nav_menu"}>
                    <ul className='nav_list'>
                        <li className='nav_item'>
                            <a href = "#home" className='nav_item_link active-link'>
                            <i className='uil uil-estate nav_icon'></i>
                                Home
                            </a>
                        </li>
                        <li className='nav_item'>
                            <a href = "#Education" className='nav_item_link'> <i class="uil uil-university nav_icon"></i>
                                Education
                            </a>
                        </li>
                        <li className='nav_item'>
                            <a href = "Experience" className='nav_item_link'> <i className='uil uil-file-alt nav_icon'></i>
                                Experience
                            </a>
                        </li>
                        <li className='nav_item'>
                            <a href = "Project" className='nav_item_link'> <i className='uil uil-code-branch nav_icon'></i>
                                Projects
                            </a>
                        </li>
                        <li className='nav_item'>
                            <a href ="#Contact" className='nav_item_link'> <i className='uil uil-phone nav_icon'></i>
                                Contact
                            </a>
                        </li>
                    </ul>
                    <i className='uil uil-times nav_close'></i>
                </div>
                <div className='nav_toggle' onClick = {() => setToggle(!Toggle)}>
                    <i className='uil uil-apps'></i>
                </div>
                
            </nav>

        </header>
    )
}

export default Header