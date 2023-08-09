import "./LoginInputBar.css";

interface LoginInputBarProps {
    text: string;
    type: string;
}
  
  function LoginInputBar({text, type }: LoginInputBarProps) {
    return (
      <div className="inputbar-container">
          <p>{text}</p>
          <input type={type}/>
      </div>
    );
  }

export default LoginInputBar;