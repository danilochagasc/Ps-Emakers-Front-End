import LoginButton from '../../components/LoginButton/LoginButton';
import LoginInputBar from '../../components/LoginInputBar/LoginInputBar';
import "./Login.css";

function Login(){
    return(
        <div className='container'>
            <main>
                <h1>Entre em sua Conta</h1>
                <LoginInputBar text={'E-mail'} type={'email'}/>
                <LoginInputBar text={'Senha'} type={'password'}/>
                <LoginButton color={'#5E2075'} text={'Entrar'}/>
            </main>


            <aside>
                <h1>Novo Aqui?</h1>
                <div className='message-container'>
                    <p>Registre-se e venha </p>
                    <pre>fazer parte da</pre> 
                    <p>maior rede social!</p>
                </div>

                <LoginButton color={'#FE690E'} text={'Registrar-se'}/>
            </aside>
        </div>

    )
}

export default Login;