import React, { PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as githubDemoModelActions from '../../../actions/githubDemoModelActions';
import * as inputComponentDemoModelActions from '../../../actions/inputComponentDemoModelActions';
import { getAllInputComponentsForShowcase } from '../../inputcomponents';
import toastr from 'toastr';

toastr.options.closeButton = true;

class SelectInputComponentPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      inputComponentDemoModel: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if(this.state.inputComponentDemoModel != nextProps.inputComponentDemoModel) {
      this.setState({inputComponentDemoModel: nextProps.inputComponentDemoModel});
    }
  }

  render() {
    return (
      <div className="ui relaxed stackable grid fluid container">

        <div className="sixteen wide column stretched row">
          <div className="row" >
            <h1>Select Input Component</h1>
          </div>

          <div className="ui horizontal divider row" >
            <span><hr /></span>
          </div>

          <div className="fifteen wide column stretched stackable centered row">
            <div className="ui three column stackable grid" style={{marginLeft: "3%"}}>
              {getAllInputComponentsForShowcase({
                githubDemoModel: this.props.githubDemoModel,
                inputComponentDemoModel: this.props.inputComponentDemoModel,
                githubModelActions: this.props.githubModelActions,
                inputComponentModelActions: this.props.inputComponentModelActions
              }).map((showcasecard, index) =>
                showcasecard
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SelectInputComponentPage.propTypes = {
  login: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  githubDemoModel: PropTypes.object.isRequired,
  inputComponentDemoModel: PropTypes.object.isRequired,
  githubModelActions: PropTypes.object.isRequired,
  inputComponentModelActions: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    login: state.login,
    user: state.user,
    githubDemoModel: state.githubDemoModel,
    inputComponentDemoModel: state.inputComponentDemoModel
  };
}

function mapDispatchToProps(dispatch) {
  return {
    githubModelActions: bindActionCreators(githubDemoModelActions, dispatch),
    inputComponentModelActions: bindActionCreators(inputComponentDemoModelActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectInputComponentPage);
