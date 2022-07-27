# cra-template-crustlab

The official CrustLab template for Create React App based on cra-template-typescript

## Usage

```bash
npx create-react-app my-app --template crustlab
```

## Description

This package is a template that let's you generate an example boilerplate app with bunch of included libraries. The app take care of the following features:

| Feature                  |            Library             |
| ------------------------ | :----------------------------: |
| Global Store             |        Redux (Toolkit)         |
| Routing                  |        React Router v6         |
| Styling                  |       Styled Components        |
| Design System            |           ANT Design           |
| Forms                    | React Hook Form and ANT Design |
| Internationalization     |         React-i18next          |
| Testing                  |     React Testing Library      |
| Components documentation |           Storybook            |

Remember that the main idea of the boilerplate app is to deliver the easiest to understand example.

## Internationalization

The app is adjusted to multiple language versions thanks to React-i18next.

### Extracting and compiling messages

In order to extract messages from the code use below command:

> npm run generate-messages

Above command creates **lang/en.json** file with english messages. Compare newly generated file with the content of **lang/pl.json** file (in case of any differences remove/add missing translations to **lang/pl.json** file).

### How can I add support for more languages?

1. Create a new file e.g. **fr.json** in **lang** directory.
2. Modify configure **i18n.ts** file, import new translation file and add to resources array.

## Sentry

Sentry is a developer-first error tracking and performance monitoring platform that helps developers see what actually matters, solve quicker, and learn continuously about their applications.
Sentry configuration is done in **index.tsx** the file, Sentry is only run on a production environment.
In order to configure the sentry correctly, we need to define two env variables **REACT_APP_SENTRY_DSN** and **REACT_APP_SETNRY_AUTH_TOKEN** and put them in our **.env** configuration file.
To create a new auth token (**REACT_APP_SETNRY_AUTH_TOKEN**), or simply copy an existing one, just open sentry.io in your browser and then go to **Settings > Account > API > Auth Tokens**.
In order for sentry to correctly display the error stack trace, we need to uplod the source map. To do this, we can use a previously prepared script **sentryCreateRelease.js** and run this npm command :

> npm run release

This command will build our codebase and then run **sentryCreateRelease.js** script.

## Testing

To run all the tests, use the previously created command :

> npm run test

This command will find and execute all files containing RTL tests, that is, those files that contain the word **test** in their name eg. **Button.test.tsx**.

## Stroybook

Storybook allows you to run and view your React components in an a-la-carte, isolated manner.
To open storybook run this command :

> npm run storybook

## Contribution

Feel free to add some value to the template either by sending an issue or creating a PR (the second option is prefered).

### How can I test my solution locally?

1. Clone a repository with the template.
2. Modify something in the template.
3. Create an app based on previously modified template:

```bash
npx create-react-app my-app --template file:../path/to/template/cra-template-crustlab
```

Pro Tip:
In most cases you can first create a new app based on current version of the template, modify something and paste the final code (from `src` directory) to the `template` directory inside template project. If you decide to add a new dependency do not forget to update `template.json` file.

## For more information, please refer to:

- [Getting Started](https://create-react-app.dev/docs/getting-started) – How to create a new app.
