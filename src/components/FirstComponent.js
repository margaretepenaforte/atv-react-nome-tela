function FirsComponents(){
    // comentários: criando primeiro componente
    // exibindo o nome na tela
    const name = "Margarete Penaforte"

    return(
        <div className="FirstComponent">
            {/* comentários no jsx */}

            <p>Primeiro Componente</p>

            {/* soma de 2 valores*/}
            {2 + 2}
            
            {/* imprimindo nome na tela*/}
            <p>Nome: {name}</p>
        </div>
    )
}

export default FirsComponents