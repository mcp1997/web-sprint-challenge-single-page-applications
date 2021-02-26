import React from 'react'

export default function Home(props) {

  const { route } = props

  return (
    <div className='header'>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>

      <button onClick={route}>Pizza?</button>
    </div>
  )
}