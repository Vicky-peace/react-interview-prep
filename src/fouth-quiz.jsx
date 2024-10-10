// Explain the difference between Class Components and Fucntional components

/* Before the introduction of Hooks in React 16.8, class components were the go-to way to write components when you needed state or lifecycle methods.
class components hold and manage local state through this.state and rely on lifecycle methods formanaging side effects .
The functions created in a class often need to be bound to this, which can be tricky for developers*/

import React, {Component} from 'react';

class Counter extends Component {
    constructor(props){
        super(props);
        this.state ={
            count: 0,
        };
    }
    increment = () => {
        this.statement({count: this.state.count + 1});
    };

    render(){
        return(
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        )
    }
}

export default Counter;

/* 
With the release of Hooks, functional components became the preferred approach for writing React components. They are simpler in many cases ,easier to manage.

Initially functional components were stateless, but now with Hooks (useState, useEffect), they can manage state and side effects just like class components . No need for this methood binding

*/

import React, {useState} from 'react';

const  Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

/*

#Question 2
Explain the Concept of Higher-Order Components (HOCs).

What I’m expecting for:
Higher-Order Components is a function that takes a component as an argument and returns a new component with some added functionality. This pattern is commonly used in React to enhance the functionality of components without modifying their code directly.

HOCs are often used to add functionality like conditional rendering, authentication checks, or enhancing the props of a component.
 */

import React from 'react';

const withAuth = (Component) => {
    return (props) => {
        const isAuthenticated = localStorage.getItem('authToken');

        if (!isAuthenticated){
            return <p>You need to log in to view content.</p>
        }
        return <Component {...props}/>;
    }
}

const Dashboard = () =>{
    return <h1>Welcome to the Dashboard</h1>
}

//export default withAuth(Dashboard)

/**
 * In this example, withAuth is a HOC that adds an authentication check to any component it wraps. If the user is not authenticated, it displays a message instead of the component's content.

HOCs help reduce code duplication and allow the same logic to be reused across multiple components.


 */



/**
 * #Question 3
What Are refs Used For in React?

What I’m expecting for:
refs in React provides a way to access DOM nodes or React elements created in the Components. They’re used in cases where you need to interact directly with a DOM element or a component instance.

They are created using React.createRef or the useRef hook in functional components. They are mostly used in managing focus, text selection, or media playback, and Controlling animations or third-party libraries. It is easy to implement custom components that require direct access to their children.

 */

import React, {useRef, useEffect} from 'react';

function AutoFocusInput(){
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);
    return <input ref={inputRef}/>
}