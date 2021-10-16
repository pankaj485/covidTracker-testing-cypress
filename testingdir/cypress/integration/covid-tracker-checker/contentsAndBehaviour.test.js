describe("Testing contents and behavior", () => {
	beforeEach(() => {
		cy.visit("https://covid-tracker-pank.netlify.app/");
	});

	it("contents: Testing header contents", () => {
		// check Covid-19 Tracker label is present
		cy.contains("Covid-19 Tracker").should("exist");

		// check links for API and Github repo
		cy.contains("API").should("exist");
		cy.contains("Github").should("exist");
	});

	it("contents: Testing search by country contents", () => {
		// check search by country feature
		cy.contains("search by country").should("exist");

		// check search button
		cy.get(".searchBox-input > img ").should("exist");
	});

	it("contents: Testing global stat contents", () => {
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

	it("contents: Testing most affected countries contents ", () => {
		// checking most affected countries feature
		cy.contains("most affected countires").should("exist");
		cy.contains("country").should("exist");
		cy.contains("cases").should("exist");
		cy.contains("recoverd").should("exist");
		cy.contains("deaths").should("exist");
	});

	it("contents: Testing Footer contents", () => {
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

	it("behaviour: Check header links", () => {
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

	it("behaviour: Check search by country feature", () => {
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

	it("behaviour: Check footer links", () => {
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
