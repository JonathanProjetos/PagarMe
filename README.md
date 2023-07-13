# Bem-vindo ao PagarMe
A API PagarMe é uma proposta de resolução do desafio técnico da [Pager.me](https://github.com/pagarme/vagas/blob/master/desafios/software-engineer-backend/README.md) e oferece um sistema de Payment Service Provider (PSP) super simplificado. Para esta proposta, foi adicionado um sistema de cadastro para que o usuário cadastrado possa realizar transações financeiras quando autorizado. Esta aplicação gera autenticação utilizando bearer token através do JWT e tem como propósito simular o ciclo de uso, que se inicia com o cadastro, autorização e manipulação dos dados. Espero que gostem, foi muito divertido desenvolver esta solução.
 
</details>

## Sumário
- [Bem-vindo ao PagarMe](#Bem-vindo-ao-PagarMe)
- [Contexto](#contexto)
- [Tecnologias e Ferramentas Utilizadas](#tecnologias-e-ferramentas-utilizadas)
- [Instalação e Execução](#instalação-e-execução)
- [Deploy](#Deploy)
- [Swagger](#Swagger)
- [Git, GitHub e Histórico de Commits](#git-github-e-histórico-de-commits)
- [Lint](#lint)

## Contexto
O __PagarMe__ é uma ferramenta que acessa a bases de dados, é permite aos usuários:
- Fazer login;
- Cadastrar um novo usuário;
- Buscar por transações;
- Criar transações;
- Buscar por recebiveis;

__Quando logado é possivel__
- Buscar por transações;
- Criar transações;
- Buscar por recebiveis;

## Tecnologias e Ferramentas Utilizadas

Este projeto utiliza as seguintes tecnologias e ferramentas:

- [NodeJS](https://nodejs.org/en/) | Plataforma de execução runtime baseda em javascript.
- [Express](https://expressjs.com/pt-br/) | Framework para nodejs 
- [Mysql](https://dev.mysql.com/doc/) | Banco de dados SQL relacional.
- [Sequelize](https://sequelize.org/docs/) | ORM Object-Ralational-Mapping.
- [JWT](https://jwt.io/) | Formatador de token seguro.

O Node.js foi utilizado com o intuito de obter os benefícios da escalabilidade e eficiência, pois ele é capaz de lidar com vários tráfegos sem bloqueio e lida com solicitações com baixo consumo de recursos. O Express é um framework para o Node.js que permite construir aplicações web robustas e escaláveis de forma mais fácil e rápida. O MySQL é um banco de dados amplamente utilizado devido a várias razões. Ele oferece desempenho eficiente e rápido, é altamente escalável e possui uma comunidade ativa que fornece suporte e recursos adicionais. Além disso, o MySQL é flexível, seguro e possui integração com tecnologias populares. O Sequelize é uma biblioteca de mapeamento objeto-relacional (ORM) para Node.js, que simplifica a interação com bancos de dados relacionais, incluindo o MySQL. Com o Sequelize, é possível mapear objetos JavaScript para tabelas e colunas no banco de dados, escrever consultas em JavaScript e gerenciar relacionamentos entre tabelas de forma fácil.O uso do JSON Web Tokens (JWT) em aplicações web oferece várias vantagens. O JWT permite autenticar usuários de forma stateless, eliminando a necessidade de armazenar informações de sessão no servidor. Além disso, o JWT é seguro, pois pode ser assinado digitalmente, garantindo a integridade do token.

## Instalação e Execução
### Download do projeto
```
git clone git@github.com:JonathanProjetos/Food-Delivery.git
```

### Arquivo env
- Dentro da pasta Food-Delivery existe o arquivo .env.example nele será nescessário remover o .example e oferecer a url do MongoDB, e uma senha para o Json-Web-Token.


### Instalar dependências
```
cd Food-Delivery
docker compose up -d

obs: O comando "docker compose up -d" vai instalar as dependências e tornar a aplicação disponível na porta 3001.
```
### Adicionar os Produtos
- Após subir os conteiners docker, abra o terminal e rode os comandos abaixo.
```
docker exec -it food_delivery bash
npm run products:import

obs: Caso queira remover os produtos rode:
npm run products:destroy
```

### Tests
```
cd Food-Delivery
npm test
ou 
npm run test:coverage
```
### Deploy
- Foi realizado o deploy da aplicação no Railway. Logo abaixo, está o link de acesso para a aplicação através do Swagger.

### Swagger
- Foi implementada a documentação por parte do Swagger, que possibilita testar a aplicação de forma mais rápida e intuitiva.
- O link para a documentação é [DOC](https://food-delivery-production-fba9.up.railway.app/docs)
- Alguns end-points séra necessessário oferecer o token para o Authorization no swagger. O token será disponibilizado quando for feito o login é como resposta terá o token.

### Git, GitHub e Histórico de Commits
Este projeto utilizou a [Especificação de Commits Convencionais](https://www.conventionalcommits.org/en/v1.0.0/), com alguns tipos da [convenção Angular](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines). Além disso, foi utilizado o pacote [conventional-commit-cli](https://www.npmjs.com/package/conventional-commit-cli) para ajudar a seguir a convenção de commits. É importante utilizar a convenção de commits em projetos para manter o histórico de commits organizado e facilitar a leitura e o entendimento do que foi desenvolvido.


### Lint
- O projeto foi desenvolvido seguindo os padrões de Clean Code especificados pelo [Lint da Trybe](https://github.com/betrybe/eslint-config-trybe).

