import "./RegisterMiniInputBar.css";

function RegisterMiniInputBar(){
    return(
        <div>
            <div className="image-container">
                <p>Imagem</p>
                {/* input que serve so pra atribuir sua funcao ao botao abaixo */}
                <input id="upload-file" type="file" accept="image/*"/>
                <label htmlFor="upload-file">
                    Selecionar Imagem
                </label> 
            </div>

        </div>
    )
}

export default RegisterMiniInputBar;