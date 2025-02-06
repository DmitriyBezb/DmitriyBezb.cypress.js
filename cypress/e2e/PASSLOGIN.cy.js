import * as data from "../helpers/default_data.json";

describe('Проверка логина и пароля', function () {

    beforeEach('Запуск', function () {
        cy.visit('/');
});

    afterEach('Конец теста', function () {
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');

});

    it('Валидный логин и валидный пароль',function () {
     cy.get('#mail').type(data.login);
     cy.get('#pass').type(data.password);
     cy.get('#loginButton').click();
     cy.get('#messageHeader').contains('Авторизация прошла успешно');
     cy.get('#messageHeader').should('be.visible');
     cy.wait(2000)

});

    it('Восстановление пароля',function () {
     cy.get('#forgotEmailButton').click();
     cy.get('#mailForgot').type('valeriy.ivanach@gmail.com');
     cy.get('#restoreEmailButton').click();
     cy.get('#messageHeader').should('be.visible');
     cy.wait(2000)

});
 
    it('Валидный логин и НЕвалидный пароль',function () {
     cy.get('#mail').type(data.login);
     cy.get('#pass').type('ilikeQAstudio2');
     cy.get('#loginButton').click();
     cy.get('#messageHeader').contains('Такого логина или пароля нет');
     cy.get('#messageHeader').should('be.visible');
     cy.wait(2000)

}); 

    it('НЕвалидный логин и валидный пароль',function () {
     cy.get('#mail').type('Bezbabnov.d@yahoo.com');
     cy.get('#pass').type(data.password);
     cy.get('#loginButton').click();
     cy.get('#messageHeader').contains('Такого логина или пароля нет');
     cy.get('#messageHeader').should('be.visible');
     cy.wait(2000)

});

    it('Логин без @ и валидный пароль',function () {
    cy.get('#mail').type('germandolnikov.ru');
    cy.get('#pass').type(data.password);
    cy.get('#loginButton').click();
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
    cy.get('#messageHeader').should('be.visible');
    cy.wait(2000)
   
});

   it('Проверка на приведение к строчным буквам',function () {
    cy.get('#mail').type('GerMan@Dolnikov.ru');
    cy.get('#pass').type(data.password);
    cy.get('#loginButton').click();
    cy.get('#messageHeader').contains('Авторизация прошла успешно');
    cy.get('#messageHeader').should('be.visible');

});

}) 

 
 

 