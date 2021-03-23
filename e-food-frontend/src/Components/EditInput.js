import React from 'react'

const EditInput = props => {
    return (
        <div className="form-floating mb-3 form-edit">
            <input
                onChange={char => props.handleEditInputChange(char.target.value, props.inputType)} 
                type={props.type} 
                className={`form-control edit-input ${props.error ? 'is-invalid' : ''}`} 
                id={props.id} 
                placeholder={props.placeholder} 
                value={props.value} 
            />
            <label htmlFor={props.id}>{props.placeholder}</label>
        </div>
    )
}

export default EditInput