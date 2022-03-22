import {Link} from "react-router-dom";
import { useState } from "react";

const Login = () => {

    let [info, setinfo] = useState({
        color: "red"
    })

    console.log(info)

const handleClick = () => {
    if(info.color === "red"){
        setinfo({
            color: "green"
        })
    } else {
        setinfo({
            color:"red"
        })
    }
}

    return(
        <div>
            <Link to="/home">Home</Link>
            <h2 className={info.color}>Sign up</h2>
            <button onClick={handleClick}>Change the color</button>
        </div>
    )
}

export default Login;