/// reference types="cypress"
describe("Checking  contents", () => {
	beforeEach(() => {
		cy.visit("https://covid-tracker-pank.netlify.app/");
	});

	it("Testing header contents", () => {
		// check Covid-19 Tracker label is present
		cy.contains("Covid-19 Tracker").should("exist");

		// check links for API and Github repo
		cy.contains("API").should("exist");
		cy.contains("Github").should("exist");
	});

	it("Testing search by country contents", () => {
		// check search by country feature
		cy.contains("search by country").should("exist");

		// check search button
		cy.get(".searchBox-input > img ").should("exist");
	});

	it("Testing global stat contents", () => {
		// check global stat feature
		cy.contains("global stat").should("exist");

		// check data cards
		cy.contains("total cases").should("exist");
		cy.contains("today Cases").should("exist");
		cy.contains("today Death").should("exist");
		cy.contains("total death").should("exist");
		cy.contains("active").should("exist");
		cy.contains("recoverd").should("exist");
	});

	it("Testing most affected countries contents ", () => {
		// checking most affected countries feature
		cy.contains("most affected countires").should("exist");
		cy.contains("country").should("exist");
		cy.contains("cases").should("exist");
		cy.contains("recoverd").should("exist");
		cy.contains("deaths").should("exist");
	});

	it("Testing Footer contents", () => {
		// checking social media icons
		cy.get(".social-medias > a >").should("exist");

		// todo make not of this line
		// checking link for instagram
		cy.get('a[href="https://www.instagram.com/pankaj_thapaliya/"]').should(
			"exist"
		);

		// checking link for facebook
		cy.get(
			'a[href="https://www.facebook.com/profile.php?id=100008397213095"]'
		).should("exist");

		// checking link for linkedin
		cy.get(
			'a[href="https://www.linkedin.com/in/pankaj-thapaliya-791ba2108/"]'
		).should("exist");

		// checking link for github
		cy.get('a[href="https://github.com/pankaj485"]').should("exist");

		// checking sub-footer
		cy.contains("© made with love by pankaj").should("exist");
	});
});
