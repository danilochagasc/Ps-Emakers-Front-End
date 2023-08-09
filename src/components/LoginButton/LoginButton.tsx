import {Link} from 'react-router-dom';
import "./LoginButton.css";

interface LoginButtonProps {
    color: string;
    text: string;
}

function LoginButton({color, text} : LoginButtonProps){
    let path = "";
    if(color === "#FE690E"){
        path = "/";
    }else if(color === "#5E2075"){
        path = "/userpage"
    }

    return (
        <div className='button-container'>
            <Link to = {path}> <input type="submit" value={text} style={{ backgroundColor: color }} /> </Link>
        </div>
    )
    
}

export default LoginButton;