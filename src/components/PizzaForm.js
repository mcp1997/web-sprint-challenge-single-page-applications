import React from 'react'

export default function PizzaForm(props) {

  const { values, change, submit, disabled, errors } = props

  const onSubmit = e => {
    console.log('added to order')
    e.preventDefault()
    submit()
  }

  const onChange = e => {
    const { name, value, type, checked } = e.target
    const valueToUse = type === 'checkbox' ? checked : value
    change(name, valueToUse)
  }
  
  return (
    <div className='form-page'>
      <div className='form-header'>
        <h2>Create Order</h2>
        <div className='form-img'></div>
      </div>
      
      <form className='form-container'>
        <h3>Order Name</h3>
        <input
          type='text'
          name='orderName'
          onChange={onChange}
          value={values.orderName}
          placeholder='Your Name Here'
        />

        <h3>Build Your Own Pizza</h3>

        <h4>Choice of Size</h4>
        <p>Required</p>
        <select
          onChange={onChange}
          value={values.size}
          name='size'
        >
          <option value=''>-- select a size --</option>
          <option value='Small'>Small</option>
          <option value='Medium'>Medium</option>
          <option value='Large'>Large</option>
        </select>

        <h4>Choice of Sauce</h4>
        <p>Required</p>
        <label>Original Red
          <input
            type='radio'
            name='sauce'
            onChange={onChange}
            value='Original Red'
            checked={values.sauce === 'Original Red'}
          />
        </label>
        <label>Garlic Ranch
          <input
            type='radio'
            name='sauce'
            onChange={onChange}
            value='Garlic Ranch'
            checked={values.sauce === 'Garlic Ranch'}
          />
        </label>
        <label>BBQ Sauce
          <input
            type='radio'
            name='sauce'
            onChange={onChange}
            value='BBQ Sauce'
            checked={values.sauce === 'BBQ Sauce'}
          />
        </label>
        <label>Spinach Alfredo
          <input
            type='radio'
            name='sauce'
            onChange={onChange}
            value='Spinach Alfredo'
            checked={values.sauce === 'Spinach Alfredo'}
          />
        </label>

        <h4>Add Toppings</h4>
        <p>Choose up to 10 (don't choose Pineapple)</p>
        <div className='toppings'>
          <label>Pepperoni
            <input
              type='checkbox'
              name='pepperoni'
              onChange={onChange}
              checked={values.pepperoni}
            />
          </label>
          <label>Sausage
            <input
              type='checkbox'
              name='sausage'
              onChange={onChange}
              checked={values.sausage}
            />
          </label>
          <label>Canadian Bacon
            <input
              type='checkbox'
              name='canadianBacon'
              onChange={onChange}
              checked={values.canadianBacon}
            />
          </label>
          <label>Spicy Italian Sausage
            <input
              type='checkbox'
              name='spicyItalianSausage'
              onChange={onChange}
              checked={values.spicyItalianSausage}
            />
          </label>
          <label>Grilled Chicken
            <input
              type='checkbox'
              name='grilledChicken'
              onChange={onChange}
              checked={values.grilledChicken}
            />
          </label>
          <label>Onions
            <input
              type='checkbox'
              name='onions'
              onChange={onChange}
              checked={values.onions}
            />
          </label>
          <label>Green Peppers
            <input
              type='checkbox'
              name='greenPeppers'
              onChange={onChange}
              checked={values.greenPeppers}
            />
          </label>
          <label>Diced Tomatoes
            <input
              type='checkbox'
              name='dicedTomatoes'
              onChange={onChange}
              checked={values.dicedTomatoes}
            />
          </label>
          <label>Black Olives
            <input
              type='checkbox'
              name='blackOlives'
              onChange={onChange}
              checked={values.blackOlives}
            />
          </label>
          <label>Roasted Garlic
            <input
              type='checkbox'
              name='roastedGarlic'
              onChange={onChange}
              checked={values.roastedGarlic}
            />
          </label>
          <label>Artichoke Hearts
            <input
              type='checkbox'
              name='artichokeHearts'
              onChange={onChange}
              checked={values.artichokeHearts}
            />
          </label>
          <label>Three Cheese
            <input
              type='checkbox'
              name='threeCheese'
              onChange={onChange}
              checked={values.threeCheese}
            />
          </label>
          <label>Extra Cheese
            <input
              type='checkbox'
              name='extraCheese'
              onChange={onChange}
              checked={values.extraCheese}
            />
          </label>
          <label>Pineapple ($100 extra)
            <input
              type='checkbox'
              name='pineapple'
              onChange={onChange}
              checked={values.pineapple}
            />
          </label>
        </div>

        <h4>Choice of Substitute</h4>
        <p>Choose up to 1</p>
        <label>Gluten Free Crust (+ $1.00)
          <input
            type='checkbox'
            name='glutenFreeCrust'
            onChange={onChange}
            checked={values.glutenFreeCrust}
          />
        </label>

        <h4>Special Instructions</h4>
        <input
          id='special'
          type='text'
          name='specialInstructions'
          onChange={onChange}
          value={values.specialInstructions}
          placeholder="Anything else you'd like to add?"
        />

        <div className='errors'>
          <div>{errors.orderName}</div>
          <div>{errors.size}</div>
          <div>{errors.sauce}</div>
        </div>

        <div className='form-footer'>
          <span>Qty:</span>
          <input
            type='number'
            name='quantity'
            onChange={onChange}
            value={values.quantity}
            min='1'
            max='10'
          />

          <button className='add-to-order' onClick={onSubmit} disabled={disabled}>
              <p>Add to Order</p>
              <p>$19.99</p>
          </button>
        </div>
      </form>
    </div>
  )
}