const ButtonComponent = (props) => {

    return(
        <button onClick={props.do}>{props.text}</button>
    );
}

export default ButtonComponent