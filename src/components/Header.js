import React from 'react'

export default function Header(props) {

  const { home, form } = props

  return (
    <div className='header'>
      <h1>Lambda Eats</h1>
      <div className='links'>
        <div onClick={home}>Home</div>
        <div onClick={form}>Build Your Own Pizza</div>
      </div>
    </div>
  )
}