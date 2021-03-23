import React from 'react'

import EditInput from './EditInput'

const EditForm = props => {
    const {
        handleEditInputChange,
        handlePhoneMasker,
        nameValue,
        streetValue,
        numberValue,
        cityValue,
        stateValue,
        phoneValue,
        nameError,
        streetError,
        numberError,
        cityError,
        stateError,
        phoneError
    } = props

    return (
        <React.Fragment>
            <EditInput
                error={nameError}
                handleEditInputChange={handleEditInputChange}
                type="text"
                id="restaurantName"
                placeholder="Nome do restaurante"
                value={nameValue}
                inputType="name"
            />
            <EditInput
                error={streetError}
                handleEditInputChange={handleEditInputChange}
                type="text"
                id="restaurantStreet"
                placeholder="Rua"
                value={streetValue}
                inputType="street" 
            />
            <EditInput
                error={numberError}
                handleEditInputChange={handleEditInputChange}
                type="int"
                id="restaurantNumber"
                placeholder="Número"
                value={numberValue}
                inputType="number" 
            />
            <EditInput
                error={cityError}
                handleEditInputChange={handleEditInputChange}
                type="text"
                id="restaurantCity"
                placeholder="Cidade"
                value={cityValue}
                inputType="city" 
            />
            <EditInput
                error={stateError}
                handleEditInputChange={handleEditInputChange}
                type="text"
                id="restaurantState"
                placeholder="Estado"
                value={stateValue}
                inputType="state" 
            />
            <EditInput
                error={phoneError}
                handleEditInputChange={handlePhoneMasker}
                type="text" 
                id="restaurantPhone"
                placeholder="Telefone"
                value={phoneValue}
                inputType="phone"
            />
        </React.Fragment>
    )
}

export default EditForm