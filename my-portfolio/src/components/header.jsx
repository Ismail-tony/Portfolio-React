import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li className='active'><Link to ="/">Home</Link></li>
                    <li><Link to ="/about">About</Link></li>
                    <li><Link to ="/project">Project</Link></li>
                    <li><Link to ="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header