import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export function App() {
    return (
        <Router>
            <Navigation />
            <Content />
        </Router>
    );
}

function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/users">Users</Link>
                </li>
            </ul>
        </nav>
    );
}

function Content() {
    return (
        <div>
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/users">
                    <Users />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
    );
}

function Home() {
    const [counter, setCounter] = React.useState(0);
    return (
        <>
            <h2 data-testid="home">Home</h2>
            <div>Counter: {counter}</div>
            <button onClick={() => setCounter(counter + 1)}>+1</button>
        </>
    );
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}
