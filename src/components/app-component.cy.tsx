import AppComponent from '../../src/components/App';
/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

// Cypress Component Test
describe('<AppComponent />', () => {
  beforeEach(() => {
    cy.mount(<AppComponent />);
  });

  it('should render and display expected content', () => {
    // cy.mount(<AppComponent />);

    // The search input should be visible and have the placeholder text
    cy.get('[data-testid="search-input"]').should('be.visible');
    cy.get('[data-testid="search-input"]').contains('Enter Github username');

    // The search button should be visible
    cy.get('[data-testid="search-button"]').should('be.visible');
  });

  it('should show loading when query is sent', () => {
    const query = 'fetz-selby';

    // Type a username[fetz-selby] into the search input and press enter
    cy.get('[data-testid="search-input"]').type(`${query}{enter}`);

    // Loading should be displayed
    cy.get('[data-testid="accordion-loading"]').should('be.visible');
  });

  it('should display a message when searching for invalid Github users', () => {
    const query = 'fetz-selby-invalid-4F23#45';

    // Type a username[fetz-selby-invalid-4F23#45] into the search input and press enter
    cy.get('[data-testid="search-input"]').type(`${query}{enter}`);

    // Error message should be displayed
    cy.get('[data-testid="no-user-available"]').should('be.visible');
    cy.get('[data-testid="no-user-available"]').contains(
      `Oops! No user(s) available`
    );
  });

  it('should enable users to search for valid Github users', () => {
    const query = 'fetz-selby';

    // Type a username[fetz-selby] into the search input and press enter
    cy.get('[data-testid="search-input"]').type(`${query}{enter}`);

    // Results should be displayed
    cy.get('[data-testid="accordion"]').should('be.visible');

    // Showing users for: "fetz-selby"
    cy.get('[data-testid="search-results-label"]').should('be.visible');
    cy.get('[data-testid="search-results-label"]').contains(
      `Showing users for: " ${query} "`
    );
  });
});

export {};
