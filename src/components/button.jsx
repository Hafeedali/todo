
import propTypes from 'prop-types';
export default function Button(props){
    return <button className={props.class} onClick={props.handleClick}>{props.btnText}</button>
}
Button.propTypes = {
class:propTypes.string,
handleClick:propTypes.func,
btnText : propTypes.string
}