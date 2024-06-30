# Teste Técnico Front-end 
  Projeto solicitado pela Be Academy(https://beacademy.substack.com).

## Sobre o Projeto:
  Este projeto é uma aplicação web  de registros de funcionários que ajuda os usuários a visualizar os dados de funcionários de maneira eficiente.
  O objetivo do projeto é fornecer uma ferramenta simples e intuitiva para armazenção de dados de fucionários, permitindo que os usuários vizualize e faça buscas.

## Tecnologias Usadas
- **Linguagens de Programação**: TypeScript, HTML, CSS
- **Bibliotecas**: React.js

## Estrutura do Projeto
- **src/**: Contém o código-fonte da aplicação.
  - **components/**: Componentes React reutilizáveis.
  - **componentsCss/**: Compontes module CSS.
  - **context/**: Estado global travéz de hooks.
  - **icons/**: Imagens png usadas no projetos.
  - **api/**: Interção com api e manipulaão de dados.
  - **types.ts/**: interfaces reutilizáveis.

## Acesso aos dados da API simulada
  Para ter acesso aos dados que alimentarão o projeto, faça o seguinte:
1. caso você não tenha, instale o pacote json-server;
2. clone este repositório do GitHub em sua máquina: https://github.com/BeMobile/desafio-front-end;
3. entre na pasta do projeto, em sua máquina, e, por meio da linha de comando, execute o comando json-server --watch db.json, para consumir a API simulada;
 É necessário deixar o json-server rodando no terminal para que os dados sejam visualizados no projeto.

## Pré-requisitos
  Antes de começar, certifique-se de atender aos seguintes requisitos:

### Softwares e Ferramentas Necessárias

- **Sistema Operacional**: Este projeto foi testado Ubuntu 20.04.
- **Node.js**: Versão 14.x ou superior. [Download Node.js](https://nodejs.org/)
- **Yarn**: Versão 1.22.22 ou superior. [Download Yarn](https://yarnpkg.com/)


## Instalação

1. Clone o repositório:
   git clone git@github.com:hudson-carlos/frontend_be.git

2. Navegue até o diretório do projeto:

   cd frontend_be
   
3. Instale as dependências:

   yarn install

4. Uso: 
   yarn start
