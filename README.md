
# Desafio Técnico - Pessoa Desenvolvedora Front End

Este projeto foi desenvolvido como parte do desafio técnico para a posição de Pessoa Desenvolvedora Front End. O objetivo deste desafio é avaliar as habilidades em desenvolvimento front-end, incluindo a integração com APIs, autenticação de usuários, visualização de dados e boas práticas de desenvolvimento.

## Funcionalidades

-   **Tela de Login e Cadastro**: O usuário pode se autenticar ou se cadastrar. A persistência do usuário é feita via `localStorage`.
    
-   **Autenticação**: A aplicação verifica a validade da sessão e, caso inativa, o usuário é deslogado e redirecionado à tela de login.
    
-   **Visualização de Cotações**: O usuário pode visualizar as cotações dos 10 itens financeiros.
    
-   **Indicação de Variação**: Se a variação diária for positiva, o valor será mostrado em verde; se negativa, em vermelho.
    
-   **Gráfico de Evolução**: O usuário pode selecionar um item e observar a evolução dos preços desde o início da aplicação.
    
-   **Responsividade**: A aplicação é responsiva e funciona em diferentes tamanhos de tela.

## Tecnologias Utilizadas

- **React**: Biblioteca para construção de interfaces de usuário.
- **Vite**: Ferramenta de build otimizada para desenvolvimento.
- **TypeScript**: Adiciona tipagem estática e outros recursos que não estão presentes no JavaScript.
- **Tailwind CSS**: Framework CSS utilitário para estilização rápida e responsiva.
- **Tremor.so**: Biblioteca de componentes acessíveis.
- **Recharts**: Biblioteca para criação de gráficos e visualizações de dados.
- **Axios**: Cliente HTTP para fazer requisições para APIs.
- **Biome**: Ferramenta para formatação e linting do código.

    

## Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/marcos-vinicius-dev/FRANQ-finance.git
cd finance-franq
npm install
```

## Configuração de Ambiente

### Requisitos

-   **Node.js**: Versão 16 ou superior.
    
-   **npm**: Versão 8 ou superior.
    

### Para rodar o projeto

1.  Clone o repositório.
    
2.  Execute `npm install` para instalar as dependências.
    
3.  Execute `npm run dev` para iniciar o servidor de desenvolvimento.



## Scripts

Abaixo estão os comandos disponíveis para executar e trabalhar no projeto:

-   **`npm run dev`**: Inicia o servidor de desenvolvimento com Vite.
    
-   **`npm run build`**: Compila o projeto com TypeScript e cria os arquivos para produção com Vite.
    
-   **`npm run preview`**: Pré-visualiza a aplicação após a build.
    
-   **`npm run format`**: Formata o código com Biome.
    
-   **`npm run lint`**: Verifica o código com Biome para garantir a qualidade do código.
    
-   **`npm run check`**: Realiza uma verificação no código para garantir que ele esteja em conformidade com as regras definidas.
-   **`npm run ci`**: Executa verificações específicas para integração contínua.