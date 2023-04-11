<div align="center">
   <img src=".github/project-logo.svg" height="90">
</div>

# Stone Currency
Stone Currency is a web application developed to facilitate the conversion of monetary values from US dollars to Brazilian reals. With a friendly and intuitive interface, the application allows users to quickly obtain the updated value of their foreign currency in Brazilian reals.

Upon opening the application, the user is presented with two input fields, where they can enter the value they want to convert and the exchange rate of the state. The application is updated in real time, with exchange rates updated from reliable sources, ensuring that the displayed value is accurate and updated every 30 seconds.

## Requirements fulfilled
- [x] Use React
- [x] Use TypeScript
- [x] Create an HTTP client with axios
- [x] Use a caching library such as swr or react-query
- [x] Use styled-components
- [x] Faithfully clone the [project layout](https://www.figma.com/file/y8IcDbllfaFAzXrEXR05PE/Teste-Front-Web-Stone) available in Figma
- [x] Write unit tests for the components
- [x] Publish the application on a fast deployment platform such as [vercel](https://vercel.com/), [heroku](https://www.heroku.com), [netlify](https://www.netlify.com) or similar

## Used technologies
- [Vite](https://vitejs.dev/) for the build and development of the application.
- [React](https://reactjs.org/) for build the user interface.
- [TypeScript](https://www.typescriptlang.org/) for data typing.
- [Styled Components](https://styled-components.com/) for styling components.
- [Axios](https://axios-http.com/docs/intro/) communication with the API.
- [Tanstack React Query](https://tanstack.com/query/) for data caching and state management.
- [React Hook Form](https://react-hook-form.com/) for form validation.
- [Zod](https://zod.dev/) for data validation.
- [React Router](https://reactrouter.com/) for navigation between pages.
- [Vitest](https://vitest.dev/) for unit tests.
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for simulating events and interactions with the interface.

## Demo
The application is available for public access at: [the-stone-currency.vercel.app](https://the-stone-currency.vercel.app/)

![](./.github/project-screenshot.png)

## Running locally

### How to run the application
To run the application, you need to have [Node.js](https://nodejs.org/en/) installed on your computer. After that, just clone the repository, enter the application directory and use the following commands in your terminal:

```bash
# Installing dependencies
$ npm install

# Executing the application
$ npm run dev
```

### How to run the tests
To run the tests, just use the following command in the terminal:

```bash
# Executing the tests
$ npm run test
```

### How to generate and run the application build locally
To generate and run the application build, just use the following command in the terminal:

```bash
# Generate the application build
$ npm run build

# Run the application build preview
$ npm run preview
```

---

😁 Project developed by [Erick Nathan](https://www.linkedin.com/in/ericknathan/).

[⬆ Back to the top](#stone-currency)<br>