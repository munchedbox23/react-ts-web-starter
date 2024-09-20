describe("Роутинг", () => {
  it("Переход на главную страницу", () => {
    cy.visit("/");
    //Должна произойти переадресация
    cy.url().should("include", "/photos");
    cy.get("h2").contains("Photos");
  });
  it("Переход открывает страницу дел", () => {
    cy.visit("/todos");
    cy.url().should("include", "/todos");
    cy.contains("Todos");
  });
  it("Переход открывает несуществующий маршрут ", () => {
    cy.visit("/fasfasfasf");
    cy.get('[data-testid="NotFoundPage"]').should("exist");
  });
});
