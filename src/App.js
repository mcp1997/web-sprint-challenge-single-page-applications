import React, { useState, useEffect } from "react";
import { Route, useHistory } from 'react-router-dom'
import formSchema from './components/FormSchema'
import * as yup from 'yup'
import axios from 'axios'
import './App.css'

import Header from './components/Header'
import Home from './components/Home'
import PizzaForm from './components/PizzaForm'
import { sampleOrder } from './components/SampleOrder'

const initialFormValues = {
  // Order Name
  orderName: '',
  // Size Dropdown
  size: '',
  // Sauce Radio
  sauce: '',
  // Toppings checkboxes
  pepperoni: false,
  sausage: false,
  canadianBacon: false,
  spicyItalianSausage: false,
  grilledChicken: false,
  onions: false,
  greenPeppers: false,
  dicedTomatoes: false,
  blackOlives: false,
  roastedGarlic: false,
  artichokeHearts: false,
  threeCheese: false,
  pineapple: false,
  extraCheese: false,
  // Gluten Free option
  glutenFreeCrust: false,
  // Special Instructions
  specialInstructions: '',
  // Order Quantity
  quantity: '1',
}

const initialFormErrors = {
  orderName: '',
  size: '',
  sauce: ''
}

const App = () => {
  // states
  const [order, setOrder] = useState(sampleOrder)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(true)

  // for routing
  const history = useHistory()
  const routeToForm = () => {
    history.push('/pizza')
  }
  const routeHome = () => {
    history.push('/')
  }

  // post request
  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(res => {
        console.log(res)
        setOrder([ newOrder, ...order ])
      })
      .catch(err => {
        debugger
      })
    setFormValues(initialFormValues)
  }

  // event handlers
  const inputChange = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => {
        // success
        setFormErrors({ ...formErrors, [name]: '' })
      })
      .catch(err => {
        // failure
        setFormErrors({ ...formErrors, [name]: err.errors[0] })
      })
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newOrder = {
      orderName: formValues.orderName.trim(),
      size: formValues.size,
      sauce: formValues.sauce,
      toppings: [
        'pepperoni',
        'sausage',
        'canadianBacon',
        'spicyItalianSausage',
        'grilledChicken',
        'onions',
        'greenPeppers',
        'dicedTomatoes',
        'blackOlives',
        'roastedGarlic',
        'artichokeHearts',
        'threeCheese',
        'pineapple',
        'extraCheese'
      ].filter(topping => formValues[topping]),
      glutenFreeCrust: formValues.glutenFreeCrust,
      specialInstructions: formValues.specialInstructions.trim(),
      quantity: formValues.quantity
    }
    postNewOrder(newOrder)
  }

  // side effects
  useEffect(() => {
    formSchema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  useEffect(() => {
    console.log(order)
  }, [order])

  return (
    <div>
      <Header home={routeHome} form={routeToForm} />

      <Route exact path='/'>
        <Home form={routeToForm} />
      </Route>

      <Route path='/pizza'>
        <PizzaForm 
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}
        />
      </Route>

    </div>
  );
};
export default App;
