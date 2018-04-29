describe('Mobility ETA', () => {
	beforeEach(() => {
		cy.visit('http://localhost:1234').contains('Mobility ETA')
	})

	it('renders the homepage', () => {
		cy.contains('Mobility ETA')
	})

	it('renders a login form', () => {
		cy.get('form')
	})

	it('allows the test user to log in', () => {
		login()
	})

	it('displays the trip for the user', () => {
		login()
		cy.contains('Trip Status' || 'Ready Time' || 'Booking ID')
		cy.get('body').should('not.contain', 'undefined')
	})
})

function login() {
	return cy
		.get('form > label')
		.contains('Client ID')
		.parent()
		.find('input')
		.type('test')
		.get('form > label')
		.contains('Password')
		.parent()
		.find('input')
		.type('test')
		.get('button')
		.click()
}
