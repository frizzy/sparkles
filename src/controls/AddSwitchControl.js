import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class AddSwitchControl extends Component {
    state = {
      arguments: {
        name: '',
        mqtt_consumer_namespace: '',
        mqtt_on_namespace: '',
        mqtt_off_namespace: '',
      }
    }

    saveNewControl = () => {
      const { dispatch } = this.props;
      dispatch({
          type: 'SAVE_CONTROL',
          config: this.state.arguments
      });
    }

    keyPress =  (e) => {
      const state = Object.assign({}, this.state);
      state.arguments[e.target.name] = e.target.value;
      this.setState(state);
    }

    render = () => {
        let saveButtonClasses = [
            'button',
            'is-primary'
        ];

        if (this.props.isSaving) {
            saveButtonClasses.push('is-loading');
        }

        return (
            <Fragment>
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input type="text" name="name" onKeyUp={this.keyPress} />
                    </div>

                    <label className="label">MQTT Consumer Namespace</label>
                    <div className="control">
                        <input type="text" name="mqtt_consumer_namespace" onKeyUp={this.keyPress} />
                    </div>

                    <label className="label">MQTT Switch On Namespace</label>
                    <div className="control">
                        <input type="text" name="mqtt_on_namespace" onKeyUp={this.keyPress} />
                    </div>

                    <label className="label">MQTT Switch Off Namespace</label>
                    <div className="control">
                        <input type="text" name="mqtt_off_namespace" onKeyUp={this.keyPress} />
                    </div>

                    <div className="control">
                        <a onClick={this.saveNewControl} className={saveButtonClasses.join(' ')}>Save</a>
                    </div>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isSaving: state.AddControlReducer.isSaving,
  }
}

AddSwitchControl = connect(mapStateToProps)(AddSwitchControl);

export default AddSwitchControl;
