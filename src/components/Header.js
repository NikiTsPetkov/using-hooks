import { useState,useEffect,useRef} from "react";

const Header = ({color,changeColor}) => {
    const [count,setCount]=useState(-1);

    const prevColor = useRef()
    const oldColor = useRef()
    // oldColor.current = color
    console.log(prevColor)

    useEffect(() => {
        setCount(count =>count + 1);
        count<0? oldColor.current = prevColor.current==="red"?"blue":prevColor.current:oldColor.current = prevColor.current;
        prevColor.current = color;
    },[color,changeColor])
    return(
        <>
        <h2>Background color changes {count} times</h2>
        <h1>Click the button bellow to change the background color to <span style={{color:oldColor.current}}>{oldColor.current}</span></h1>
        </>
    )
}

export default Header;