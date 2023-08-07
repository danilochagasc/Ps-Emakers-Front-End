import "./RegisterMiniInputBar.css";

function RegisterMiniInputBar(){
    return(
        <div>
            
            <p>Imagem</p>
            {/* input que serve so pra atribuir sua funcao ao botao abaixo */}
            <input id="upload-file" type="file" accept="image/*" className="InputEscondido"/>
            <label htmlFor="upload-file" className="custom-file-upload">
                Selecionar Imagem
            </label> 
        </div>
    )
}

export default RegisterMiniInputBar;