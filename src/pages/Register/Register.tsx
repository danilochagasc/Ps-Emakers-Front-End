import RegisterInputBar from "../../components/RegisterInputBar/RegisterInputBar";
import RegisterMiniInputBar from "../../components/RegisterMiniInputBar/RegisterMiniInputBar"; 
import "./Register.css";


function Register(){
    return(
        <div className="container">
            <main>
                <h1>Registrar</h1>
                <div className="inputbar">
                    <RegisterInputBar type = {"text"} text={"Nome"} placeholder={""}/>
                    <RegisterInputBar type = {"email"} text={"Email"} placeholder={"exemplo@email.com"}/>
                    <RegisterInputBar type = {"password"} text={"Senha"} placeholder={""}/>
                    <RegisterInputBar type = {"password"} text={"Confirmar Senha"} placeholder={""}/>
                    <RegisterMiniInputBar />
                </div>
            </main>

            <aside>

            </aside>
            
        </div>
    )
}

export default Register;