
describe('Teste de Login', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/index.html');
  });

  it('Deve preencher o formulário e fazer login com sucesso', () => {
      cy.get('#email').type('teste@gmail.com');
      cy.get('#password').type('password');
      cy.get('button[type="submit"]').click();

      cy.on('window:alert', (txt) => {
          expect(txt).to.contains('Login bem-sucedido!');
      });
  });

  it('Deve mostrar erro ao tentar fazer login com credenciais inválidas', () => {
      cy.get('#email').type('email_invalido');
      cy.get('#password').type('senha_invalida');
      cy.get('button[type="submit"]').click();
   
      cy.on('window:alert', (txt) => {
        expect(txt).to.contains('Usuário ou senha incorretos.');
      });
    });
   

  it('Deve reiniciar a página', () => {
      cy.reload();
  });

  it('Deve obter o título da página', () => {
      cy.title();
  });
});

