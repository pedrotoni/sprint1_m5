function Section1() {
    return (
      <div className="description-and-form">
        <div className="description">
          <h3>Ajude o algorítimo a ser mais certeiro</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque ultricies tellus nec mi porta convallis sollicitudin eu urna. 
            Mauris rhoncus erat sed interdum dignissim. Suspendisse semper pretium consectetur. 
            Praesent bibendum arcu risus, sit amet iaculis ex tempus quis.
            Cras et erat ut tellus vulputate tincidunt. Aenean lacinia euismod augue vel egestas. 
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
            Vestibulum vel urna tortor. Vivamus et arcu non felis tristique eleifend. Morbi eu condimentum urna.
            Curabitur eu magna eget turpis condimentum ultrices. 
            Suspendisse quis lorem ultricies, pulvinar purus sed, egestas erat. 
            Etiam ultricies a ante vehicula pharetra. Quisque ut neque mattis, consequat velit ut, ultrices orci.
            Nulla varius elementum erat vel pharetra. Aenean sit amet nisi diam. 
            Morbi viverra, magna ac luctus commodo, odio ante suscipit libero, at mattis augue est vel metus.</p>
        </div>
        <div className="form">
            <form>
              <label htmlFor="name">Nome Completo</label>
              <input type="text" id="name" name="name" placeholder="Digite aqui seu nome completo" required minlength="8" maxlength="40"></input>
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" name="email" placeholder="Digite aqui seu e-mail" required></input>
              <label htmlFor="cpf">CPF</label>
              <input type="text" id="cpf" name="cpf" placeholder="Digite aqui seu CPF" required minlength="11" maxlength="11"></input>
              <div className="radio-buttons">
                <input type="radio" name="name"></input>
                <label htmlFor="masculino">Masculino</label>
                <input type="radio" name="name"></input>
                <label htmlFor="feminino">Feminino</label>
              </div>
              <input type="submit" value="Enviar"></input>
            </form>
        </div>
      </div>
    )
  }

  export default Section1;