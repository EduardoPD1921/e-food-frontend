import React from 'react'

const Header = props => {
    return (
        <header>
            <div id="header-content">
                <h2>E-Food</h2>
                <h3>Nunca foi tão fácil pedir <span>comida</span></h3>
                <h5>Encontre restaurantes perto de você</h5>
                <div id="search-input">
                    <ion-icon id="search-icon" name="search-outline"></ion-icon>
                    <input type="text" placeholder="Buscar endereço e número"></input>
                    <button>Buscar</button>
                </div>
            </div>
        </header>
    )
}

export default Header