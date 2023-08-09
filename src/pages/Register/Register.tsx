import {Link} from 'react-router-dom';
import RegisterInputBar from "../../components/RegisterInputBar/RegisterInputBar";
import BigLogo from "../../assets/BigLogo_emakers_png.png";
import "./Register.css";


function Register(){
    return(
        <div className="container">
            <main>
                <h1>Registrar</h1>
                <div className="form">
                    <RegisterInputBar type = {"text"} text={"Nome"} placeholder={""}/>
                    <RegisterInputBar type = {"email"} text={"Email"} placeholder={"exemplo@email.com"}/>
                    <RegisterInputBar type = {"password"} text={"Senha"} placeholder={""}/>
                    <RegisterInputBar type = {"password"} text={"Confirmar Senha"} placeholder={""}/>
                    

                    <div className="select-image-container">
                        
                        {/* Botão para Seleção de Sexo */}
                        <div className="select-container">
                            <label htmlFor="escolha">Sexo</label>
                                <select id="escolha" name="escolha">
                                <option value="opcao1">Masculino</option>
                                <option value="opcao2">Feminino</option>
                                <option value="opcao3">Outro</option>
                                <option value="opcao3">HELICOPTERO DE COMBATE 3681</option>
                            </select>
                        </div>

                        {/* Botão para upload de imagem de perfil */}
                        <div className="image-container">
                            <p>Imagem</p>
                            <input id="upload-file" type="file" accept="image/*"/>
                            <label htmlFor="upload-file"> Selecionar Imagem </label> 
                        </div>
                        
                    </div>

                    <div className="submit-container">
                        <input type="submit" value= "Registrar-se"/> 
                        <Link to= "/login" className='link-style'><h3> Já possui conta? </h3></Link>
                    </div>
                    
                </div>
            </main>

            <aside>

                <img src= {BigLogo} alt="BigLogo" />
                <pre>
                     Venha fazer parte da 
                </pre>
                <p>maior rede social também!</p>

            </aside>
            
        </div>
    )
}

export default Register;