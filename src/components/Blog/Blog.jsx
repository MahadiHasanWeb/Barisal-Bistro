import React from 'react';

const Blog = () => {
    return (
        <div className="p-10">
            <div className="mb-8">
                <h1 className="text-4xl font-semibold">1. Tell us the differences between uncontrolled and controlled components </h1>
                <p className='my-3'>Controlled components are components whose value is controlled by React, while uncontrolled components are components whose value is maintained by the user. Controlled components are useful when you want to maintain complete control over the state of your application, while uncontrolled components are useful when you want to delegate control of the state of your application to the user.
                </p>
            </div>
            <div className="mb-8">
                <h1 className="text-4xl font-semibold">2. How to validate React props using PropTypes</h1>
                <p className='my-3'>PropTypes is a utility provided by React that allows you to define the expected types and shapes of props that a component should receive. By defining PropTypes for your component, you can catch errors and make your code more robust. To use PropTypes, you import it from the prop-types package, define the expected types and shapes of your props using propTypes, and specify any required props using isRequired.</p>
            </div>
            <div className="mb-8">
                <h1 className="text-4xl font-semibold">3. Tell us the difference between nodejs and express js</h1>
                <p className='my-3'>Node.js is a JavaScript runtime environment that allows you to run JavaScript code outside of the browser. It is used for building various types of applications including web applications, command-line tools, and more.

                    Express.js is a web application framework that runs on top of Node.js. It provides a simple and easy-to-use API for building web applications and APIs. Express.js makes it easier to handle HTTP requests, route URLs, and serve static files.

                    In summary, Node.js is the underlying technology that allows you to run JavaScript code on the server-side, while Express.js is a framework built on top of Node.js that provides additional features and utilities for building web applications and APIs.</p>
            </div>
            <div className="mb-8">
                <h1 className="text-4xl font-semibold">4. What is a custom hook, and why will you create a custom hook?</h1>
                <p className='my-3'>A custom hook is a reusable function in React that uses one or more of the built-in hooks to provide custom functionality. You might create a custom hook to abstract away complex or repetitive logic, share stateful logic between components, or to make your code more modular and easier to maintain.</p>
            </div>
        </div>
    );
};

export default Blog;