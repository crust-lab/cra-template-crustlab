# cra-template-crustlab

The official CrustLab template for Create React App based on cra-template-typescript

## Usage

```bash
npx create-react-app my-app --template crustlab
```

## Description
This package is a template that let's you generate an example boilerplate app with bunch of included libraries. The app take care of the following features:

| Feature              | Library           |
| -------------------- |:-----------------:|
| Global Store         | Redux (Toolkit)   | 
| Routing              | React Router      |
| Styling              | Styled Components |
| Design System        | ANT Design        |
| Forms                | React-Hook-Form   |
| HTTP                 | Axios             |
| Internationalization | React-Intl        |

Remember that the main idea of the boilerplate app is to deliver the easiest to understand example.

## Internationalization

The app is adjusted to multiple language versions thanks to React-Intl.

### Extracting and compiling messages

In order to extract messages from the code use below command:

> yarn messages:extract

Above command creates __lang/en.json__ file with english messages. Compare newly generated file with the content of __lang/pl.json__ file (in case of any differences remove/add missing translations to __lang/pl.json__ file).

Transform messages into AST to improve app performance:

> yarn messages:compile

### How can I add support for more languages?

1. Create a new file e.g. __fr.json__ in __lang__ directory.
2. Modify package.json file and add the script responsible for building AST based on newly created json file ("scripts" section):

> formatjs compile src/lang/fr.json --ast --out-file src/compiled-lang/fr.json

3. Modify package.json file and extend the "compile:messages" script. ("scripts" section)
4. Import new compile language file in App.tsx.

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
