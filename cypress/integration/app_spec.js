describe('Mobility ETA', () => {
	it('should render the homepage', () => {
		cy.visit('http://localhost:8888/mobility-eta/').contains('Mobility ETA')
	})
})
