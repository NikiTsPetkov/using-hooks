const Button = ({color,changeColor}) => {
    return <button className="btn" onClick={changeColor}>background color is <span style={{color}}>{color}</span></button>
}

export default Button;