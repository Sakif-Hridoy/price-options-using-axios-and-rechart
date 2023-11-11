import PropTypes from 'prop-types';
import Link from '../Link/Link';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';

const NavBar = props => {
    const [open,setOpen] = useState(false)

    const routes = [
        { path: '/', name: 'Home', id: 'home' },
        { path: '/about', name: 'About', id: 'about' },
        { path: '/services', name: 'Services', id: 'services' },
        { path: '/contact', name: 'Contact', id: 'contact' },
        { path: '*', name: 'NotFound', id: 'notfound' },
      ];
      
    return (
        <nav>
          <div className='md:hidden' onClick={()=> setOpen(!open)}>
            {
                open === true ? <AiOutlineClose className='text-2xl'></AiOutlineClose> :<AiOutlineMenu className='text-2xl'></AiOutlineMenu>
            }
          
          </div>
           <ul className='md:flex'>
           {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
           </ul>
        </nav>
    );
};

NavBar.propTypes = {
    
};

export default NavBar;