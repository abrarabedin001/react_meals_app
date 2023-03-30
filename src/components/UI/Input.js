

import classes from "./Imput.module.css";


const Input = props => {
    return(
        <div className={classes.input}>
            <lavel htmlFor={props.input.id}>{props.label}</lavel>
            <input/>
        </div>
    )
}
export default Input;