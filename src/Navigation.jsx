import { Twirl as Hamburger } from 'hamburger-react'
import { useState, useEffect } from 'react'
import Logo from '/public/images/logo.svg'

export default function Navigation() {
    const [isOpen, setOpen] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    // Update the window width when the window is resized
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    if (windowWidth < 768) {
        return (
            <div className={`flex items-center z-10 px-5 py-5 relative -mt-11 ${isOpen ? 'bg-white' : ''}`}>
                {/* Only show the hamburger if the screen width is less than 768px */}
                <Hamburger
                    toggled={isOpen}
                    toggle={setOpen}
                    size={18}
                    distance="md"
                    color={isOpen ? 'hsl(0, 0%, 63%)' : 'hsl(0, 0%, 100%)'}
                    duration={0.5}
                />
                <img src={Logo} alt='Room logo' className='ml-32' />
                {isOpen && <MobileNavList />}
            </div>
        )
    } else {
        return (
            <div className=" flex items-center z-10 px-5 py-5 absolute mt-13">
                <img src={Logo} alt='Room logo' className='ml-20 mr-20' />
                <DesktopNavList />
            </div>
        )
    }
}

const NavList = ({ listName, className }) => {
    return (
        <li>
            <a href='#' className={`${className} pb-3`}>{listName}</a>
        </li>
    );
}


const MobileNavList = () => {
    return (
        <ul className='absolute flex gap-10 text-[1.1rem] right-10 '>
            <NavList listName="home" />
            <NavList listName="shop" />
            <NavList listName="about" />
            <NavList listName="contact" />
        </ul>
    )
}

const DesktopNavList = () => {
    return (
        <ul className='flex gap-8 text-white text-[1.25rem] font-normal '>
            <NavList listName="home" className="hover:border-b-2 border-white transition-[border] duration-75"/>
            <NavList listName="shop" className="hover:border-b-2 border-white transition-[border] duration-75"/>
            <NavList listName="about" className="hover:border-b-2 border-white transition-[border] duration-75"/>
            <NavList listName="contact" className="hover:border-b-2 border-white transition-[border] duration-75"/>
        </ul>
    )
}
