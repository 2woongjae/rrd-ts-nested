import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink as Link
} from 'react-router-dom';
import './App.css';

const Child = () => (
  <div>
    <Link activeClassName="selected" to="/world/seoul">
      Seoul
    </Link>
    <Link exact={true} activeClassName="selected" to="/world/busan">
      Busan
    </Link>
    <Route path="/world/seoul" render={() => <h2>Seoul</h2>} />
    <Route path="/world/busan" render={() => <h2>Busan</h2>} />
  </div>
);

const Parent = () => (
  <div>
    <Link exact={true} activeClassName="selected" to="/">
      Home
    </Link>
    <Link activeClassName="selected" to="/hello">
      Hello
    </Link>
    <Link exact={true} activeClassName="selected" to="/world">
      World
    </Link>
    <Route exact={true} path="/" render={() => <h2>Home</h2>} />
    <Route path="/hello" render={() => <h2>Hello</h2>} />
    <Route path="/world" component={Child} />
  </div>
);

class App extends React.Component {
  render() {
    return (
      <Router>
        <Parent />
      </Router>
    );
  }
}

export default App;
