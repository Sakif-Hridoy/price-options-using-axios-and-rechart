import PropTypes from 'prop-types';
import Link from '../Link/Link';
import { AiOutlineMenu } from "react-icons/ai";

const NavBar = props => {
    const routes = [
        { path: '/', name: 'Home', id: 'home' },
        { path: '/about', name: 'About', id: 'about' },
        { path: '/services', name: 'Services', id: 'services' },
        { path: '/contact', name: 'Contact', id: 'contact' },
        { path: '*', name: 'NotFound', id: 'notfound' },
      ];
      
    return (
        <nav>
            <AiOutlineMenu></AiOutlineMenu>
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