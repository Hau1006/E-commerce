import React, { useEffect, useRef, useState } from 'react'
import { links } from './links'
import { FaBars } from 'react-icons/fa';
import './menu.css'
import { Link, Links } from 'react-router-dom'

const Menu = () => {
    const [showLinks, setshowLinks] = useState(false);
    const linksContainerref = useRef(null);
    const linksRef = useRef(null);
    const toggleLinks = () => {
        setshowLinks(!showLinks);
    }

    useEffect(() => {
        const linkHeight = linksRef.current.getBoundingClientRect().height;
        if (showLinks) {
            linksContainerref.current.style.height = `${linkHeight}px`

        } else {
            linksContainerref.current.style.height = '0px'

        }

    }, [showLinks])
    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <Link className="logo" to='/'> Home</Link>
                    <button className="nav-toggle" onClick={toggleLinks}><FaBars /></button>
                </div>
                <div className="link-container" ref={linksContainerref}>
                    <ul className="links" ref={linksRef}>
                        {links.map((link) => {
                            const { id, url, text } = link;
                            return (
                                <li key={id}>
                                    <a href={url}>{text}</a>
                                </li>
                            )

                        })}
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Menu
