<div align="center">
   <img src=".github/project-logo.svg" height="90">
</div>

# Stone Currency
[🇺🇸 Do not speak Portuguese? Click here to view the english version.](./README-EN.md)

Stone Currency é uma aplicação web desenvolvida para facilitar a conversão de valores monetários de dólar para real. Com uma interface amigável e intuitiva, a aplicação permite que os usuários obtenham rapidamente o valor atualizado de sua moeda estrangeira em reais brasileiros.

Ao abrir a aplicação, o usuário é apresentado com dois campos de entrada, onde pode digitar o valor que deseja converter e a taxa do estado. A aplicação é atualizada em tempo real, com taxas de câmbio atualizadas de fontes confiáveis, garantindo que o valor exibido seja preciso e atualizado a cada 30 segundos.

## Requisitos cumpridos
- [x] Utilizar React
- [x] Utilizar TypeScript
- [x] Criar um cliente HTTP com axios
- [x] Utilizar uma bilbioteca de cache como swr ou react-query
- [x] Utlizar styled-components
- [x] Clonar fielmente o [layout do projeto](https://www.figma.com/file/y8IcDbllfaFAzXrEXR05PE/Teste-Front-Web-Stone) disponibilizado no Figma
- [x] Fazer testes unitários dos componentes
- [x] Publicar a aplicação em uma plataforma de deploy rápido como [vercel](https://vercel.com/), [heroku](https://www.heroku.com), [netlify](https://www.netlify.com) ou semelhantes

## Tecnologias utilizadas
- [Vite](https://vitejs.dev/) para o build e desenvolvimento da aplicação.
- [React](https://reactjs.org/) para a construção da interface.
- [TypeScript](https://www.typescriptlang.org/) para a tipagem dos dados.
- [Styled Components](https://styled-components.com/) para a estilização dos componentes.
- [Axios](https://axios-http.com/docs/intro/) para a comunicação com a API.
- [Tanstack React Query](https://tanstack.com/query/) para o cache de dados e gerenciamento de estado.
- [React Hook Form](https://react-hook-form.com/) para a validação dos formulários.
- [Zod](https://zod.dev/) para a validação dos dados.
- [React Router](https://reactrouter.com/) para a navegação entre páginas.
- [Vitest](https://vitest.dev/) para os testes unitários.
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) para a simulação de eventos e interações com a interface.

## Demonstração
A aplicação está disponível para acesso público em: [the-stone-currency.vercel.app](https://the-stone-currency.vercel.app/)

## Execução local

### Como executar a aplicação
Para executar a aplicação, é necessário ter o [Node.js](https://nodejs.org/en/) instalado em sua máquina. Após isso, basta clonar o repositório, entrar no diretório da aplicação e utilizar os seguintes comandos em seu terminal:

```bash
# Instalação de dependências
$ npm install

# Execução da aplicação
$ npm run dev
```

### Como executar os testes
Para executar os testes, basta utilizar o seguinte comando no terminal:

```bash
# Execução dos testes
$ npm run test
```

### Como gerar e executar a build da aplicação localmente
Para gerar e executar a build da aplicação, basta utilizar o seguinte comando no terminal:

```bash
# Gerar o build da aplicação
$ npm run build

# Executar o preview do build da aplicação
$ npm run preview
```

---

😁 Projeto desenvolvido por [Erick Nathan](https://www.linkedin.com/in/ericknathan/).

[⬆ Voltar ao topo](#stone-currency)<br>