import React from 'react'

const header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li className='active'><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/project">Project</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default header