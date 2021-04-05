import React from 'react'

const Description = ({ description = '', className=''}) => {
  if(!description) {
    return null;
  }
  return (
    <p className={className}>
      {description}
    </p>
  )
}

export default Description
