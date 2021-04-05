import React, { useEffect, useState } from 'react'
import Description from '../../components/Description';
import FormInput from '../../components/FormInput';
import './PersonalInformation.css';

const PersonalInformation = () => {
  const [formData, setFormData] = useState({});
  const [formValues, setFormValues] = useState({});
  const [selecedIndex, setSelectedIndex] = useState(null);

  const getData = async () => {
    const data = await import('../PersonalInformation/data.json');
    setFormData(data);
  }

  useEffect(() => {
    getData()
  }, [])

  const InputData = formData.data && formData.data.fields || [];

  const handleChange = (e) => {
    setFormValues({...formValues, [e.target.name]: e.target.value})
  }

  const handleClick=(index) => {
    setSelectedIndex(index);
  }

  return (
    <>
      <h1>{formData.formType}</h1>
      {InputData.map((field, index) => (
        <div className="input-row" key={field.name}>
          <FormInput 
            name={field.name}
            options={field.options || []}
            type={field.type}
            label={field.label}
            onClick={() => handleClick(index)}
            value={formValues[field.name]}
            onChange={handleChange}
          />
          {selecedIndex === index && field.description && <Description 
            description={field.description} 
          />}
        </div>
      ))}
    </>
  )
}

export default PersonalInformation
