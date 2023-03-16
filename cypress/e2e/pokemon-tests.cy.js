describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000/')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })


  // eslint-disable-next-line
  it("Clicking a pokemon loads that pokemon's page", function() {
    cy.visit('http://localhost:5000/')
    cy.contains('ivysaur').click()
    cy.contains('chlorophyll')
    cy.contains('overgrow')
  })

})
