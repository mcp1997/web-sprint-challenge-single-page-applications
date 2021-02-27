describe('Pizza Form App', () => {

  // before each test we navigate to http://localhost:3000/pizza
  beforeEach(() => {
    cy.visit('http://localhost:3000/pizza')
  })

  it('sanity tests', () => {
    expect(1).to.equal(1)
    expect(1 + 2).to.equal(3)
    expect({}).to.eql({})
    expect({}).to.not.equal({})
  })

  // variables
  const orderNameInput = () => cy.get('input[name=orderName]')
  const sizeDropdown = () => cy.get('select[name=size]')
  const sauceRadio = () => cy.get('input[name=sauce]')
  const pepperoniBox = () => cy.get('input[name=pepperoni]')
  const sausageBox = () => cy.get('input[name=sausage]')
  const cheeseBox = () => cy.get('input[name=extraCheese]')
  const submitBtn = () => cy.get('.add-to-order')

  it('the elements exist', () => {
    orderNameInput().should('exist')
    sizeDropdown().should('exist')
    sauceRadio().should('exist')
    pepperoniBox().should('exist')
    sausageBox().should('exist')
    cheeseBox().should('exist')
    submitBtn().should('exist')
  })

  describe('various inputs are functioning', () => {
    it('can add text to Order Name', () => {
      orderNameInput()
        .should('have.value', '')
        .type('Matt Phillips')
        .should('have.value', 'Matt Phillips')
    })

    it('can select a size', () => {
      sizeDropdown().select('Medium')
    })

    it('can select a sauce', () => {
      sauceRadio().check('Garlic Ranch')
    })

    it('can select multiple toppings', () => {
      pepperoniBox().check()
      sausageBox().check()
      cheeseBox().check()
    })
  })

  describe('submitting order', () => {
    it('can submit an order', () => {
      orderNameInput().type('Matt')
      sizeDropdown().select('Large')
      sauceRadio().check('BBQ Sauce')
      pepperoniBox().check()
      sausageBox().check()
      cheeseBox().check()
      submitBtn().click()
    })

    it('submit button is disabled when required options are not chosen', () => {
      submitBtn().should('be.disabled')
      orderNameInput().type('M')
      sizeDropdown().select('Large')
      sizeDropdown().select('')
      sauceRadio().check('BBQ Sauce')
      pepperoniBox().check()
      sausageBox().check()
      cheeseBox().check()
      submitBtn().should('be.disabled')
    })
  })
})