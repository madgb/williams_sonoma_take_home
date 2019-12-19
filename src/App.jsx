import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: null,
      paths: null
    };
  }

  componentDidMount() {
    const targetUrl =
      "https://williams-sonoma-test.s3-us-west-1.amazonaws.com/all-new/index.json";
    fetch(targetUrl)
      .then(response => response.json())
      .then(data => {
        const paths = data.groups.map(group => {
          const idArray = group.id.split("-");
          const path = idArray[idArray.length - 1].replace(/[a-z]/g, "");
          const name = group.name.replace(/&amp;/g, "&");
          return { id: group.id, path, name };
        });
        const groups = data.groups;
        this.setState({ paths, groups });
      })

      .catch(error => {
        console.error(error);
        return error;
      });
  }
  render() {
    const { paths } = this.state;
    return (
      <div className="App">
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                {paths &&
                  paths.map(path => (
                    <li>
                      <Link to={`/${path.path}`}>{path.name}</Link>
                    </li>
                  ))}
              </ul>
            </nav>
            <Switch>
              <Route path="/" exact render={() => <Home />} />
              {paths &&
                paths.map(path => (
                  <Route
                    path={`/${path.path}`}
                    render={props => (
                      <About {...props} path={path} data={this.state.groups} />
                    )}
                  />
                ))}
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

function Home() {
  return <h2>Home</h2>;
}

function About({ path, data }) {
  const id = path.id;
  const itemInfo = data.filter(item => item.id === id)[0];

  return (
  <h2>
    {itemInfo.links.www}
  </h2>);
}
