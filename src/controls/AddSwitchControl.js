import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class AddSwitchControl extends Component {
    saveNewControl = () => {
      const { dispatch } = this.props;
      dispatch({
          type: 'SAVE_CONTROL'
      });
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
