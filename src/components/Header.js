import {NavLink} from 'react-router-dom';


const Header = () => {
    return (
        <ul className='header'>
        <li><NavLink className="nav-link" to='/'>Home</NavLink></li>
        <li><NavLink className="nav-link" to='/users'>Users</NavLink></li>
        <li><NavLink className="nav-link" to='/contact'>Contact</NavLink></li> 
        {/* I could change the name for whatever and no problem <li><Link to='/contact'>pizza</Link></li>  */}
    </ul>
    )
}

export default Header

