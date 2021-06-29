# Advanced NestJS Scaffold

[Nest](https://github.com/nestjs/nest) is a progressive [Node.js](http://nodejs.org) framework for building efficient and scalable server-side applications.
This project was generated with [Nest CLI](https://github.com/nestjs/nest-cli) version 7 and [Node.js](https://nodejs.org/en/about/releases) version 14.
It has a complete development environment configured, including build, test, and deploy scripts as examples.

## Table of Contents

- [Project structure](#project-structure)
- [Available npm scripts](#available-npm-scripts)
- [Code scaffolding](#code-scaffolding)
- [Development mode](#development-mode)
- [Data persistence](#data-persistence)
- [Linting and formatting code](#linting-and-formatting-code)
- [Running unit tests](#running-unit-tests)
- [Running end-to-end tests](#running-end-to-end-tests)
- [Running smoke tests](#running-smoke-tests)
- [Debugging](#debugging)
- [Security, performance and best practices](#security-performance-and-best-practices)
- [Commit messages convention](#commit-messages-convention)
- [Build and deployment](#build-and-deployment)
- [Support](#support)

## Project structure

When working in a large team with many developers that are responsible for the same codebase, having a common understanding of how the application should be structured is vital.
Based on best practices from the community, Nest and [Angular coding style guide](https://angular.io/guide/styleguide), other github projects and developer experience, your project should look like this:

```html
├── cicd
├── e2e
|  ├── page-objects
|  ├── specs
|  |  └── app.spec.ts
|  └── jest.config.js
├── src
|  ├── app
|  |  ├── app.controller.spec.ts
|  |  ├── app.controller.ts
|  |  ├── app.module.ts
|  |  ├── app.service.spec.ts
|  |  └── app.service.ts
|  ├── assets
|  ├── environments
|  |  ├── environment.prod.ts
|  |  └── environment.ts
|  ├── main.ts
|  └── swagger.ts
├── .commitlintrc.json
├── .editorconfig
├── .eslintrc.json
├── .gitignore
├── .lintstagedrc.json
├── .prettierrc.json
├── CHANGELOG.md
├── jest.config.js
├── nest-cli.json
├── package-lock.json
├── package.json
├── README.md
├── sonar-project.properties
├── tsconfig.build.json
├── tsconfig.json
└── webpack.config.js
```

All of the app's code goes in a folder named `src`. The end-to-end tests are in the `e2e` folder.
In Nest, everything is organized in modules, and every application have at least one of them, the `app` root module.
The `app` module is the entry point of the application and is the module that Nest uses to bootstrap the application.
Static files are placed in `assets` folder.

## Available npm scripts

The scripts in [package.json](package.json) file were built with simplicity in mind to automate as much repetitive tasks as possible and help developers focus on what really matters.
There are commands to start the application, code linting and formatting, to run unit tests, to run e2e tests, to generate project documentation via [Compodoc](https://compodoc.app/) and project changelog, npm audit, to build, release and deploy the application to [Docker Swarm](https://docs.docker.com/engine/swarm/), and others.
All the commands should be executed in a console inside the root directory.

## Code scaffolding

Run `nest generate controller controller-name` to generate a new controller.
You can also use `nest generate filter|pipe|service|class|guard|middleware|gateway|module|decorator|interceptor`.

## Development mode

Use `npm run start` to run the app in the development mode.
This app includes [Swagger](https://swagger.io/). It is available at [http://localhost:3000/api](http://localhost:3000/api).
The OpenAPI Specification is exportable by running `npm run swagger` script.

## Data persistence

This project uses a [PostgreSQL](https://www.postgresql.org/) database.
In local development, you need to provide a connection to a PostgreSQL instance. You can use the next example:

```bash
docker run -d -p 5432:5432 -e POSTGRES_USER=root -e POSTGRES_PASSWORD=secret postgres
```

## Linting and formatting code

Use `npm run lint` to analyze your code. It includes, `ESLint` and `Prettier`.
Many problems can be automatically fixed with `npm run lint:fix`.

Depending on your editor, you may want to add an editor extension to lint and format your code while we type or on-save.
To ensure all files committed to git don't have any TypeScript, linting, or formatting errors, there is a tool called [lint-staged](https://www.npmjs.com/package/lint-staged) that can be used.
When lint-staged is used in combination with [husky](https://www.npmjs.com/package/husky), the linting commands specified with lint-staged can be executed to staged files on pre-commit.

## Running unit tests

Use `npm run test` to execute the unit tests via [Jest](https://jestjs.io/).
Use `npm run test:watch` to keep executing unit tests in real time while watching for file changes in the background.
You can see the HTML coverage report opening the [index.html](reports/coverage/lcov-report/index.html) file in your web browser.

If you want to exclude a specific test, simply use `xit()` or `xdescribe()`.
If you want to run a specific test, use `fit()` or `fdescribe()`.
The `x` means exclude and the `f` stands for focused.

## Running end-to-end tests

Use `npm run e2e` to execute the end-to-end tests via [Jest](https://jestjs.io/) and [SuperTest](https://www.npmjs.com/package/supertest).
Use `npm run e2e:watch` to keep executing your tests while watching for file changes in the background.
You can see the HTML report opening the [index.html](reports/e2e/index.html) file in your web browser.

## Running smoke tests

Use `npm run smoke` to execute the smoke tests via [Jest](https://jestjs.io/), [SuperTest](https://www.npmjs.com/package/supertest) and [Testcontainers](https://www.testcontainers.org/).
Use `npm run smoke:watch` to keep executing your tests while watching for file changes in the background.
You can see the HTML report opening the [index.html](reports/smoke/index.html) file in your web browser.

## Debugging

You can debug the code, add breakpoints, inspect variables and view the application's call stack.
Also, you can use the IDE for debugging unit, end-to-end and smoke tests.
These functionalities are provided natively or based on plugins.
You can debug tests in chrome inspector with `debugger` keyword if you run `npm run test:debug`, `npm run e2e:debug` or `npm run smoke:debug`.
When you are using the debug scripts, you need to open the `chrome://inspect` page.

## Security, performance and best practices

The `npm audit` command submits a description of the dependencies configured in your package to your default registry and asks for a report of known vulnerabilities
You can also have npm automatically fix the vulnerabilities by running `npm audit fix`.

By default, Nest makes use of the [Express](https://expressjs.com/) framework.
[Fastify](https://www.fastify.io/) provides a good alternative framework for Nest because it solves design issues in a similar manner to Express.
However, Fastify is much faster than Express, achieving almost two times better benchmarks results.

Code conventions are base rules that allow the creation of a uniform code base across an organization.
[Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) is very popular and recommended.
You can complete them with rules just for TypeScript.

## Commit messages convention

In order to have a consistent git history every commit must follow a specific template. Here's the template:

```bash
<type>(<ITEM ID>?): <subject>
```

### Type

Must be one of the following:

- **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, Jenkins, SauceLabs)
- **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **revert**: A commit that reverts a previous one
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **test**: Adding missing tests or correcting existing tests

### ITEM ID

The related **issue** or **user story** or even **defect**.

- For **user stories**, you shoud use `US-` as prefix. Example: `feat(US-4321): ...`
- For **no related issues** or **defects** you should leave it blank. Example: `feat: ...`

### Subject

The subject contains a succinct description of the change.

## Build and deployment

Run `npm run build` to build the project. The build artifacts will be stored in the `dist` directory.
In `cicd` folder you can find scripts for your [Jenkins](https://www.jenkins.io/) CI pipeline, a Dockerfile and an example for deploying your application with [Ansible](https://www.ansible.com/) to [Docker Swarm](https://docs.docker.com/engine/swarm/).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers.
If you'd like to join them, please [read more here](https://docs.nestjs.com/support).
