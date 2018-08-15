import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './CaptureTemplatesEditor.css';

import * as captureActions from '../../actions/capture';

import CaptureTemplate from './components/CaptureTemplate';

import { List } from 'immutable';
import _ from 'lodash';

class CaptureTemplatesEditor extends PureComponent {
  constructor(props) {
    super(props);

    _.bindAll(this, ['handleAddNewTemplateClick', 'handleFieldUpdate']);
  }

  handleAddNewTemplateClick() {
    this.props.capture.addNewEmptyCaptureTemplate();
  }

  handleFieldUpdate(templateId, fieldName, newValue) {
    this.props.capture.updateTemplateFieldValue(templateId, fieldName, newValue);
  }

  render() {
    const { captureTemplates } = this.props;

    return (
      <div>
        <div>
          {captureTemplates.map(template => (
            <CaptureTemplate key={template.get('id')}
                             template={template}
                             onFieldUpdate={this.handleFieldUpdate} />
          ))}
        </div>

        <div className="new-capture-template-button-container">
          <button className="fas fa-plus fa-lg btn btn--circle" onClick={this.handleAddNewTemplateClick} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    captureTemplates: state.capture.get('captureTemplates', new List()),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    capture: bindActionCreators(captureActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CaptureTemplatesEditor);