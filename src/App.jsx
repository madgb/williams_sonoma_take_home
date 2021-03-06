import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Detail from "./components/Detail";
import List from "./components/List/List";
import CarouselModal from "./components/CarouselModal/CarouselModal";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: null,
      paths: null,
      carouselImgArray: null,
      toggleCarouselModal: true,
      currModalHeroIndex: 0
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

  carouselTargetRender(index) {
    const { groups } = this.state;
    const carouselImgArray = [...groups[index].images];
    carouselImgArray.unshift(groups[index].hero);
    this.setState({ carouselImgArray });
  }

  setCurrModalHeroIndex(index) {
    this.setState({ currModalHeroIndex: index });
  }

  openCarouselModal = index => {
    this.setState({ toggleCarouselModal: true });
    this.carouselTargetRender(index);
  };

  setcurrModalHeroIndex = index => {
    this.setState({ currModalHeroIndex: index });
  };

  closeCarouselModal = e => {
    e.preventDefault();
    this.setState({
      toggleCarouselModal: false,
      currModalHeroIndex: 0
    });
  };

  render() {
    const {
      paths,
      groups,
      toggleCarouselModal,
      carouselImgArray,
      currModalHeroIndex
    } = this.state;
    return (
      <div className="App">
        {toggleCarouselModal && carouselImgArray && (
          <CarouselModal
            closeCarouselModal={this.closeCarouselModal}
            carouselImgArray={carouselImgArray}
            currModalHeroIndex={currModalHeroIndex}
            setcurrModalHeroIndex={this.setcurrModalHeroIndex}
          />
        )}
        <Header />
        <Router>
          <div className="app-wrapper">
            <Switch>
              {groups && paths && (
                <Route
                  path="/"
                  exact
                  render={props => (
                    <List {...props} groups={groups} paths={paths} />
                  )}
                />
              )}
              {paths &&
                paths.map((path, index) => (
                  <Route
                    key={index}
                    path={`/${path.path}`}
                    render={props => (
                      <Detail
                        {...props}
                        path={path}
                        data={groups}
                        openCarouselModal={this.openCarouselModal}
                        index={index}
                      />
                    )}
                  />
                ))}
            </Switch>
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
