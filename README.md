# cra-template-crustlab

The official CrustLab template for Create React App based on cra-template-typescript

## Usage

```bash
npx create-react-app my-app --template crustlab
```

## Description
This package is a template that let's you generate an example boilerplate app with bunch of included libraries. The app take care of the following features:

| Feature       | Library           |
| ------------- |:-----------------:|
| Global Store  | Redux (Toolkit)   | 
| Routing       | React Router      |
| Styling       | Styled Components |
| Design System | ANT Design        |
| Forms         | React-Hook-Form   |
| HTTP          | Axios             |

Remember that the main idea of the boilerplate app is to deliver the easiest to understand example.

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
