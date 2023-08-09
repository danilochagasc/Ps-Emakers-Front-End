import LoginButton from '../../components/LoginButton/LoginButton';
import LoginInputBar from '../../components/LoginInputBar/LoginInputBar';
import Banner from "../../assets/Logo_lateral_secundaria.png";
import "./Login.css";

function Login(){
    return(
        <div className='log-container'>
            <main>
                <img src={Banner} alt="Banner" />
                <h1>Entre em sua Conta</h1>
                <LoginInputBar text={'E-mail'} type={'email'}/>
                <LoginInputBar text={'Senha'} type={'password'}/>

                <div className='entrar'><LoginButton color={'#5E2075'} text={'Entrar'}/></div>
                
            </main>


            <aside>
                <h1>Novo Aqui?</h1>
                <div className='message-container'>
                    <p>Registre-se e venha </p>
                    <pre>
                        fazer parte da
                    </pre> 
                    <p>maior rede social!</p>
                </div>

                <LoginButton color={'#FE690E'} text={'Registrar-se'}/>
            </aside>
        </div>

    )
}

export default Login;