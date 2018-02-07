import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddSwitchControl from './controls/AddSwitchControl';

class AddControlModal extends Component {
    state = {
        control: 'none',
        component: null
    }

    closeModalHandler = () => {
        const { dispatch } = this.props;
        dispatch({
            type: 'ADD_CONTROL_MODAL',
            display: false
        });
    }

    saveNewControl = () => {
      const { dispatch } = this.props;
      dispatch({
          type: 'SAVE_CONTROL'
      });
    }

    selectControlHandler = (event) => {
        // @todo Appears that dynamically loading components in this fashion
        //       does not want to work? Further investigation required.
        if (event.target.value) {
            const Component = 'Add' + event.target.value + 'Control';
            this.setState({
                control: event.target.value,
                component: <Component />
            });
        } else {
            this.setState({
                control: 'none',
                component: null
            });
        }
    }

    render = () => {
        let ControlComponent;
        if (this.state.control !== 'none') {
            console.log(this.state.component);
            ControlComponent = this.state.component;
        }

        return (
          <div className={this.props.show ? 'modal is-active' : 'modal'}>
            <div className="modal-background"></div>
            <div className="modal-content">
                <div className="container is-fluid">
                    <h2 className="subtitle">
                        Add a new control
                    </h2>

                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <div className="select is-rounded">
                              <select onChange={this.selectControlHandler} value={this.state.control}>
                                  <option value="none">Select a control</option>
                                  <option value="Switch">Switch</option>
                                  <option value="Button">Button</option>
                                  <option value="TempDial">Temperature Dial</option>
                              </select>
                            </div>
                        </div>
                    </div>

                    {this.state.control !== 'none' ? ControlComponent : null}
                </div>
            </div>
            <button onClick={this.closeModalHandler} className="modal-close is-large" aria-label="Cancel"></button>
          </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
  return {
    show: state.AddControlReducer.displayAddControlModal,
    isSaving: state.AddControlReducer.isSaving,
  }
}

AddControlModal = connect(mapStateToProps)(AddControlModal);

export default AddControlModal;
