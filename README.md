Utility
==========================

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

In [this file](docs/README.md) you will find usefull documentation about setting up, running and extending this project.
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).


## Folder Structure
The component division and files/folders structure is created following [this proposal](https://gist.github.com/ryanflorence/daafb1e3cb8ad740b346)


## Performance debugging
This project also supports performance debugging using [react-addons-perf](https://www.npmjs.com/package/react-addons-perf).  

To use it, open a browser console within your project. Then,
```
// Start measurement
Perf.start()

// Do stuff in your project

// Stop measurement
Perf.stop()

// Prints changes count on Virtual DOM that doesn't impact on render()
Perf.printWasted()
```

It's recommended to check official reference [here](https://facebook.github.io/react/docs/perf.html).
