/// refrence types="cypress"

describe("Checking Behaviours", () => {
	beforeEach(() => {
		cy.visit("https://covid-tracker-pank.netlify.app/");
	});

	it("Check header links", () => {
		// for links with target="_blank" cypress can't support click and get back so we are testing existance with link

		// cy.get('a[href="https://disease.sh/v3/covid-19/countries"]').click();
		cy.get('a[href="https://disease.sh/v3/covid-19/countries"]').should(
			"exist"
		);

		// check github link
		// cy.get('a[href="https://github.com/pankaj485/covid-19-tracker"]').click();
		cy.get('a[href="https://github.com/pankaj485/covid-19-tracker"]').should(
			"exist"
		);
	});

	it("Check search by country feature", () => {
		// check input for the field
		cy.get(".searchBox-input > input").type("nepal");
		cy.get(".searchBox-input > img").click();

		// check country name field
		cy.contains("country :").should("exist");
		// check country flag
		cy.get(".countryDetail > div > img").should("exist");
		// check population
		cy.get(".countryDetail > h2 ").contains("population").should("exist");

		// check data cards
		cy.get(".mainCard > .info > h2").contains("total cases").should("exist");
		cy.get(".mainCard > .info > h2").contains("today cases").should("exist");
		cy.get(".mainCard > .info > h2").contains("today death").should("exist");
		cy.get(".mainCard > .info > h2").contains("total death").should("exist");
		cy.get(".mainCard > .info > h2").contains("active").should("exist");
		cy.get(".mainCard > .info > h2").contains("recoverd").should("exist");
	});

	it.only("Check footer links", () => {
		// for links with target="_blank" cypress can't support click and get back so we are testing existance with link

		//check instagram link
		// cy.get('a[href="https://www.instagram.com/pankaj_thapaliya/"]').click();
		cy.get('a[href="https://www.instagram.com/pankaj_thapaliya/"]').should(
			"exist"
		);

		// check facebook  link
		// cy.get('a[href="https://www.facebook.com/profile.php?id=100008397213095"]').click();
		cy.get(
			'a[href="https://www.facebook.com/profile.php?id=100008397213095"]'
		).should("exist");

		// check linkedin  link
		// cy.get('a[href="https://www.linkedin.com/in/pankaj-thapaliya-791ba2108/"]').click();
		cy.get(
			'a[href="https://www.linkedin.com/in/pankaj-thapaliya-791ba2108/"]'
		).should("exist");

		// check github  link
		// cy.get('a[href="https://github.com/pankaj485"]').click();
		cy.get('a[href="https://github.com/pankaj485"]').should("exist");
	});
});
