import React from 'react'
import './FormInput.css';

const Form = ({type, label="", name="", options=[], className='', value='', ...props}) => {

  if(type === 'radio') {
    return (
      <div className={`input-field ${className}`}>
        <label htmlFor={name}>
          {label}:
        </label>
        {options.map(option => (
          <>
            <div className="radio-input" key={option}>
              <label htmlFor={option}>{option}</label>
              <input 
                type="radio"
                name={name}
                checked={value === option}
                value={option}
                {...props}
              />
            </div>
          </>
        ))}
      </div>
    )
  }

  if(type === 'select') {
    return (
      <div className={`input-field ${className}`}>
        <label htmlFor={name}>
          {label}:
        </label>
        <select 
          id={name} 
          name={name}
          {...props} 
          value={value}
        >
          {options.map(option => (<option key={option}>{option}</option>))}
        </select>
      </div>
    )
  }

  return (
    <div className={`input-field ${className}`}>
      {label && (
        <label htmlFor={name}>
          {label}: 
        </label>
      )}
      <input
        type={type}
        name={name}
        value={value}
        {...props}
      />
    </div>
  )
}

export default Form
