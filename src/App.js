import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import AddControlModal from './AddControlModal';

import 'css/main.css';

class App extends Component {

    componentWillMount = () => {
        const { dispatch } = this.props;
        dispatch({
            type: 'APP_STARTED'
        });
    }

    displayAddControlHandler = () => {
        const { dispatch } = this.props;
        dispatch({
            type: 'ADD_CONTROL_MODAL',
            display: true
        });
    }

    render = () => {
        return (
            <Fragment>
              <section className="hero is-medium is-light is-bold">
                  <div className="hero-body">
                      <div className="container">
                            <h1 className="title">
                                Sparkles
                            </h1>
                            <h2 className="subtitle">
                                fancy pants control panels for everyone!
                            </h2>

                            <a onClick={this.displayAddControlHandler} className="button is-rounded">Add Control</a>
                        </div>
                  </div>
              </section>
              <AddControlModal />
            </Fragment>
        );
    }
}

App = connect()(App);

export default App;
