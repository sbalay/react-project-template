Utility
==========================

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

In [this file](docs/README.md) you will find usefull documentation about setting up, running and extending this project.
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).


## Folder Structure
The component division and files/folders structure is created following [this proposal](https://gist.github.com/ryanflorence/daafb1e3cb8ad740b346)

## Config

You need a file named `.env` in the project rootpath with the following variables:

```
REACT_APP_API_BASE_URL=xxxxxx
REACT_APP_UTILITY_ID=xxxxxx
```

## Styles

We use scoped styles per component, powered by [Radium](https://github.com/FormidableLabs/radium) library.

This makes us write inline styles using JS object and 0% of css. This is an important decision that has a high impact in the project development and is based on the pros and cons exposed in [this talk](https://speakerdeck.com/vjeux/react-css-in-js).
