function Section3() {
    return(
        <form>
            <div className="section3">
            <h4 className="section3-text">Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</h4>
            <div className="mini-form">
                <div className="mini-form-name">
                    <label htmlFor="friend-name">Nome do seu amigo:</label>
                    <input type="text" id="friend-name" name="friend-name" minlength="8" maxlength="40" placeholder="Digite aqui o nome do seu amigo" required></input>
                </div>
                <div className="mini-form-email">
                    <label htmlFor="friend-email">E-mail:</label>
                    <input type="email" id="friend-email" name="friend-email" placeholder="Digite aqui o e-mail do seu amigo" required></input>
                </div>
            </div>
                <div className="section3-button-div">
                    <button className="send-button" type="submit" >Enviar Agora!</button>
                </div>
                <br></br>
                <br></br>
            </div>
        </form>
    )
}

export default Section3;