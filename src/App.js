import React, { Component } from 'react';
import { connect } from 'react-redux';

import 'css/main.css';

class App extends Component {

    componentWillMount = () => {
        const { dispatch } = this.props;
        dispatch({
            type: 'APP_STARTED'
        });
    }

    render = () => {
        return (
            <section className="hero is-medium is-light is-bold">
                <div className="hero-body">
                  <div className="container">
                        <h1 className="title">
                            Sparkles
                        </h1>
                        <h2 className="subtitle">
                            fancy pants control panels for everyone!
                        </h2>
                    </div>
                </div>
            </section>
        );
    }
}

App = connect()(App);

export default App;
