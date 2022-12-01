import { Fragment } from 'react';

import banner from '../../assets/banner.jpg';
import classes from './Header.module.css';

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>Meal-y!</h1>
            <button>Cart</button>
        </header>
        <div className={classes['main-image']}>
            <img src={banner}  alt='A table with a yummy meal!'/>
        </div>
    </Fragment>
}

export default Header;
