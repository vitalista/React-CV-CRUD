import React from 'react'
import styled from 'styled-components'

const Button = styled.button`

    width: 100%;
    padding: 12px 30px;
    background-color: #3498db;
    color: #fff;
    font-size: 1.1rem;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    transition: background-color 0.3s ease;

  &:hover {
      background-color: #2980b9;
  }

`;

function AuthButton({label}) {
  return (
    <Button>{ label }</Button>
  )
}

export default AuthButton