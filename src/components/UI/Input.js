

import classes from "./Input.module.css";


const Input = props => {
    return(
        <div className={classes.input}>
            <lavel htmlFor={props.input.id}>{props.label}</lavel>
            <input id={props.input.id} {...props.input}/>
        </div>
    )
}
export default Input;