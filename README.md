# Bem-vindo ao PagarMe
A API PagarMe é uma proposta de resolução do desafio técnico da [Pager.me](https://github.com/pagarme/vagas/blob/master/desafios/software-engineer-backend/README.md) e oferece um sistema de Payment Service Provider (PSP) super simplificado. Para esta proposta, foi adicionado um sistema de cadastro para que o usuário cadastrado possa realizar transações financeiras quando autorizado. Esta aplicação gera autenticação utilizando bearer token através do JWT e tem como propósito simular o ciclo de uso, que se inicia com o cadastro, autorização e manipulação dos dados. Espero que gostem, foi muito divertido desenvolver esta solução.
 
<details> <strong>Back-end</strong>

## Sumário
- [Bem-vindo ao PagarMe](#Bem-vindo-ao-PagarMe)
- [Contexto](#contexto)
- [Tecnologias e Ferramentas Utilizadas](#tecnologias-e-ferramentas-utilizadas)
- [Instalar as dependências e executar](#instalar-as-dependências-e-executar)
- [Docker](#Docker)
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
### Entities

<img src='https://drive.google.com/uc?id=1f7M2e1P9hERtibbc6Wk31tA_tA-dUGzG' alt='entidades'/>

### Download do projeto
```
git@github.com:JonathanProjetos/PagarMe.git
```

### Arquivo env
- Dentro da pasta PagarMe, existe o arquivo .env.example. Nele, será necessário remover o .example e fornecer os dados para a conexão com o banco de dados, bem como uma senha para o JSON Web Token.

### Instalar as dependências e executar
```
cd PagarMe
npm install
npm run dev
```
### Comandos Adicionais
```
// Inicializa o Eslint
npm run lint

// Dropa o banco de dados
npm run drop

// Cria o banco de dados é adiciona as migrates
npm run create

// Adiciona os seeders
npm run seed 
```
### Docker
 - O tempo de execução do docker-compose terá um acrecimo de cerca de 30 segundos devido as checagens de disponibilidade, os "Health-checks". Este recurso garantirá que tanto o banco de dados quanto a API estejam diponíveis para a execução.
 - Caso a porta 3001 não seja a mais adequada para você. A mudança da porta deve acontecer tanto no arquivo server.js quanto no docker-compose.yml na parte de services/node/ports e services/node/healthcheck.
 - Quando executar a aplicação usando o docker-compose up, as dependências necessárias serão instaladas. Além disso, o banco de dados será criado e as migrações serão executadas. Logo após, a aplicação será disponibilizada através do Nodemon na porta 3001.
```
cd PagarMe
docker-compose up -d

- logs docker
cd PagarMe
docker logs -f --tail 1000 pagar_bem
```

### Tests
```
cd PagarMe
npm test
ou 
npm run test:coverage
```
### Deploy
- Foi realizado o deploy da aplicação no Railway. Logo abaixo, está o link de acesso para a aplicação através do Swagger.

### Lint
- O projeto foi desenvolvido seguindo os padrões de Clean Code especificados pelo [Lint da Trybe](https://github.com/betrybe/eslint-config-trybe).
</details>
