import "./RegisterInputBar.css";

interface RegisterInputBarProps {
  placeholder: string;
  text: string;
  type: string;
}

function RegisterInputBar({ placeholder, text, type }: RegisterInputBarProps) {
  return (
    <div className="reg-inputbar-container">
        <p>{text}</p>
        <input type={type} placeholder={placeholder}/>
    </div>
  );
}

export default RegisterInputBar;
