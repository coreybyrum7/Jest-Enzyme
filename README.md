## **React Testing with Jest and Enzyme**

1. ### [Intro and Setup](#introduction)
2. ### [Component Testing](#testing-components)
3. ### [Prop Types Testing](#testing-prop-types)
4. ### [Redux](#redux-and-its-implementation)
5. ### [Connected Components](#testing-with-connected-components)
6. ### [Simulating Events](#testing-with-simulated-events)

#

## ***Introduction***

It's extremely important we write well tested code. Many companies believe in TDD, a test driven development approach. Testing will promote a coding standard between developers and code reusability with modularity. We will be focusing on unit and integration tests. 

This project was created using `create-react-app`. After cloning to your local machine, please view the package.json file.

`"dependencies":
    enzyme": "^3.10.0",
    "enzyme-adapter-react-16": "^1.15.1",
    "jest": "^24.9.0",
    "jest-enzyme": "^7.1.2",
    "node-sass": "^4.13.0",
    "react": "^16.11.0",
    "react-dom": "^16.11.0",
    "react-scripts": "3.2.0"
    }
`

Here, you can see the packages we're going to be working with. Run `npm install`, to add these packages to your project.

[Enzyme](https://airbnb.io/enzyme/) is a JavaScript Testing utility for React that makes it easier to test your React Components' output. You can also manipulate, traverse, and in some ways simulate runtime given the output. Enzyme's API is meant to be intuitive and flexible by mimicking jQuery's API for DOM manipulation and traversal.
[Enzyme Adapters](https://www.npmjs.com/package/enzyme-adapter-react-16) are provided by Enzyme. They provide compatibility with the different React versions.
[Jest](https://jestjs.io/en/) is a JavaScript testing framework built and maintained by the team at Facebook. Jest is a node-based test runner that runs in the terminal. Jest is well-documented, requires little configuration and can be extended to match your requirements.
[Jest-Enzyme](https://www.npmjs.com/package/jest-enzyme) provides the compatibility between Jest and Enzyme.

## Configuration
In, `src/setupTest.js`, you can see the Enzyme adaptar is created and initialized for the application.

## Architecture
Within `/src/components/`, each component folder contains it's component code as well as it's test. Dependencies and utilities are imported as needed. Project architecture can be customized to match the team's preference.

## Running the application
Launch your React app by running <br>`npm start` <br>from your terminal. 

## Testing
In a separate window, if using VS Code, press `CMD + \`, and then run the command <br>
`npm test`
#

##  ***Testing Components***
Industry standard utilizes TDD, meaning that test cases are written prior to the component code being developed. Traditionally, we want to see our tests fail before we see them pass, this is how we know are tests are working correctly. Test files must contain at least one test to be considered passed. Jest traverses the project for `.test.js` and `spec.js` files to see what test files it needs to run.

### Important methods
1. `describe('Testing suite', fn)`<br>
Creates a block that groups together several related tests. . Also useful for grouping testing output.
2. `it('Perform individual test', fn)`<br>
`it` is an alias of `test`. The first argument is the test name, and the second is a function that contains the expectations to test.
3. `beforeEach(fn, timeout), beforeAll(fn, timeout)`<br>
Runs a function before each/all of the tests in this file runs. If the function returns a promise or is a generator, Jest waits for that promise to resolve before running the test.
4. `afterEach(fn, timeout), afterAll(fn, timeout)`<br>
Runs a function after each/all of the tests in this file have completed. If the function returns a promise or is a generator, Jest waits for that promise to resolve before continuing.
5. [Expect](https://jestjs.io/docs/en/expect) `expect(value)`<br>
When you're writing tests, you often need to check that values meet certain conditions. expect gives you access to a number of "matchers" that let you validate different things.
6. `shallow(<MyComponent />`<br>
Shallow rendering is useful to constrain yourself to testing a component as a unit, and to ensure that your tests aren't indirectly asserting on behavior of child components. Always begin with Shallow.
7. `mount(<MyComponent />)`<br>
Full rendering. If componentDidMount or componentDidUpdate should be tested, use mount. If you want to test component lifecycle and children behavior, use mount
8. `render(<MyComponent />)`<br>
If you want to test children rendering with less overhead than mount and you are not interested in lifecycle methods, use render

#
## ***Testing Prop Types***

#
## ***Redux and It's Implementation***

#
## ***Testing Connected Components***

#
## ***Testing with Simulated Events***

#
## ***Useful information***

### Unit testing
Given the nature of our development in creating AEM components, we should be creating primarily pure functions/components.
A pure function is one that follows the below rules,
1. Return the same output for the same input.
2. Returning value cannot depend on any hidden information or on internal state.
3. No side-effects. A side-effect is usually network requests, some mutations or mutable objects.
4. No global variables. A function cannot depend on global variables.
5. Do not overwrite arguments. Arguments are immutable.
6. Easy to test. Don’t need to mock anything or provide. All a function needs are arguments.

### Run existing tests
Get started by running the following command,
    npm test
The current structure pairs test files adjacent to the component files.