import classes from "./Header.module.css"
import HeaderCartButton from './HeaderCartButton'
import mealsImage from '../../assets/meals.jpg'
const Header=props=>{
    return(
        <>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton/>
        </header>
        
        <div className={classes['main-image']}  >
            <img src={mealsImage} alt='A table full of delicous food.'/>
        </div>
        </>
    )
}
export default Header;