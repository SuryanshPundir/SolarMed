import logo from '../../assets/images/sun.png'
import userImg from '../../assets/images/avatar-icon.png'
import { NavLink, Link } from 'react-router-dom'
import {BiMenu} from 'react-icons/bi'
import { useContext, useEffect, useRef } from 'react'
import { authContext } from '../../context/AuthContext'

const navLinks = [
  {
    path: '/home',
    display:'Home'
  },
  {
    path: '/doctors',
    display:'Doctors'
  },
  {
    path: '/services',
    display:'Services'
  },
  {
    path: '/contact',
    display:'Contact'
  },
]

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
const {user, role, token} = useContext(authContext)

  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky_header')
      } else {
        headerRef.current.classList.remove('sticky_header')
      }
    })
  }
  useEffect(() => {
    handleStickyHeader();
    return () => {
      window.removeEventListener('scroll', handleStickyHeader);
    }
  })

  const toggleMenu = () => menuRef.current.classList.toggle('show_menu')
  return <header className='header flex items-center' ref={headerRef}>
    <div className="container">
      <div className="flex items-center justify-between ">
        {/* logo */}
            <Link to="/" >
        <div className='flex items-center gap-2 md:gap-4'>
          <img src={logo} alt="logo" className='w-6 h-6 rounded-full md:w-10 md:h-10' />
          <h2 className='text-[24px] font-[600] md:text-[28px]'>SolarMed</h2>
        </div>
          </Link>
        {/* menu */}
        <div className="navigation" ref={menuRef} onClick={toggleMenu}>
          <ul className="menu flex items-center gap-[2.7rem]">
            {
              navLinks.map((link, index) => <li key={index}>
                <NavLink to={link.path} className={navClass => navClass.isActive ? 'text-primaryColor text-[16px] leading-7 font-[600]' : 'text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor'}> 
                  {link.display}
                </NavLink>
              </li>)
            }
          </ul>
        </div>
        
        {/* nav right */}

        <div className="flex items-center gap-4">
          {
            token && user ? <div className=' ' >
            <Link to={`${role === 'doctor' ? '/doctors/profile/me' : '/users/profile/me'}`} className='flex items-center gap-4 font-semibold' >
            <figure className='w-[35px] h-[35px] rounded-full'>
              <img src={ user?.photo} alt="" className='w-full h-full object-cover rounded-full' />
            </figure>
                {/* <h2>{user?.name}</h2> */}
            </Link>
            </div> : <Link to='/login'>
            <button className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]'>
              Login
            </button>
          </Link>
          }
          
          
          <span className="md:hidden" onClick={toggleMenu}>
            <BiMenu className='w-6 h-6 cursor-pointer'/>
          </span>
        </div>
      </div>
    </div>
  </header>
}

export default Header
