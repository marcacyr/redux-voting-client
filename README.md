# Redux Voting Client

#### Works in conjunction with [Redux Voting Server](https://github.com/marcacyr/redux-voting-server)

##### You can find more information from the tutorial [here](http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html)

You will notice that if you go through the tutorial, my code differs in many places in slight ways. This is the product of my own
conventions, style, and decisions I made to enforce certain things in the application that I felt enhanced the strength of this small app.

#### Why?

Redux is a fantastic "framework" for handling data in state in modern web applications. It lends itself well to separating UI from
logic in an application. It plugs in nicely with ReactJS and is a great basis for building performant, well-organized, scalable apps
on the modern web.

If you want to learn more about reasons why we would want to separate logic from UI, [check out my post on Domain Driven Design/Domain
Architecture](https://medium.com/@marcacyr/domain-architecture-software-engineering-23a0510ebdf#.qqz54wtbo).

#### What is it?

This is the client-side application for a simple voting system (choose between two options), that narrows things down to one
ultimate winner.

It uses Webpack, Babel, Redux, socket.io-client, ImmutableJS and ReactJS (React 14, with addons separate).

To try this application out locally, you can clone the repo (or download the files) and run `npm install`. The bundled JS installs
into the `dist` directory. Boilerplate HTML can be found in `dist/index.html`. You'll see there that `bundle.js` is included through
a script tag in the HTML.

#### Testing

Testing is done using Mocha and Chai, with chai-immutable as well. Tests can be found in the `test` directory. `jsdom` is also in use
rather than in-browser testing. The implementation for this can be found in the `test_helper.js` file.

#### Webpack configuration

Webpack config can be found in the usual place (`webpack.config.js`). You will see there that `react-hot-loader` is in use.

#### ES6

ES6 (ES2015) is in use in this project, hence the use of Babel. If you are not yet familiar with ES6, do not fret. There are loads
of great resources out there for understanding what's new. [2ality is a great resource for understanding ES6](http://www.2ality.com/).

