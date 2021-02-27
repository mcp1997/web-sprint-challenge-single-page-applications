import React from 'react'

export default function Home(props) {

  const { form } = props

  return (
    <div className='home-container'>
      <h2>Delicious Pizza made to order, delivered while coding</h2>
      <button onClick={form}>Pizza?</button>
    </div>
  )
}