import { useState } from "react";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import "./LoginInputBar.css";

interface LoginInputBarProps {
  text: string;
  type: string;
}

function LoginInputBar({ text, type }: LoginInputBarProps) {
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  if (type === "email") {
    return (
      <div className="log-inputbar-container">
        <p>{text}</p>
        <input type={type} />
      </div>
    );
  } else if (type === "password") {
    return (
      <div className="log-inputbar-container">
        <p>{text}</p>
          <input
            value={password}
            type={visible ? "text" : "password"}
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="eye-icon" onClick={() => setVisible(!visible)}>
            {visible ? <VscEye /> : <VscEyeClosed />}
        </div>
      </div>
    );
  }
}

export default LoginInputBar;
