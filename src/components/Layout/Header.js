
import { Fragment } from "react";
import shoesImage from '../../assets/shoes.jpg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = props =>{

    return <Fragment>
        <header className={classes.header}>
            <h1>React Shoes</h1>
            <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
            <img src={shoesImage} alt='A rack full of Wonderful Shoes' />
        </div>

    </Fragment>

};

export default Header;