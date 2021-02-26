import * as yup from 'yup'

const formSchema = yup.object().shape({
  orderName: yup.string()
    .trim()
    .required('Order Name (Your Name) is required')
    .min(2, 'Order Name must be at least 2 characters long'),
  size: yup.string().oneOf(['Small', 'Medium', 'Large'], 'Size is required'),
  sauce: yup.string()
    .oneOf([
      'Original Red',
      'Garlic Ranch',
      'BBQ Sauce',
      'Spinach Alfredo'
    ], 'Sauce is required'),
    // the following are not required
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    canadianBacon: yup.boolean(),
    spicyItalianSausage: yup.boolean(),
    grilledChicken: yup.boolean(),
    onions: yup.boolean(),
    greenPeppers: yup.boolean(),
    dicedTomatoes: yup.boolean(),
    blackOlives: yup.boolean(),
    roastedGarlic: yup.boolean(),
    artichokeHearts: yup.boolean(),
    threeCheese: yup.boolean(),
    pineapple: yup.boolean(),
    extraCheese: yup.boolean(),
    glutenFreeCrust: yup.boolean(),
    specialInstructions: yup.string(),
    quantity: yup.number()
})

export default formSchema