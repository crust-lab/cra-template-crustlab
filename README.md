# cra-template-crustlab

The official CrustLab template for Create React App based on cra-template-typescript

## Usage

```bash
npx create-react-app my-app --template crustlab
```

## Description

This package is a template that let's you generate an example boilerplate app with bunch of included libraries. The app take care of the following features:

| Feature                  |        Library        |
| ------------------------ | :-------------------: |
| Global Store             |    Redux (Toolkit)    |
| Routing                  |    React Router v6    |
| Styling                  |   Styled Components   |
| Design System            |      ANT Design       |
| Forms                    |    React Form Hook    |
| Internationalization     |     React-i18next     |
| Testing                  | React Testing Library |
| Components documentation |       Storybook       |

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
