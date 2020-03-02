import React from 'react';
import { Link } from 'react-router-dom'
import * as Routes from '../../constants/routes'

import '../../Sass/Navigation.scss'

const Navigation = () => {
    return ( <div className='Navigation'>
        <h2>Navigation</h2>
        <ul>
            <li><Link to={Routes.SIGN_IN}>Sign In</Link></li>
            <li><Link to={Routes.LANDING}>Landing</Link></li>
            <li><Link to={Routes.HOME}>Home</Link></li>
            <li><Link to={Routes.ACCOUNT}>Account</Link></li>
            <li><Link to={Routes.ADMIN}>Admin</Link></li>
        </ul>
    </div> );
}
 
export default Navigation;