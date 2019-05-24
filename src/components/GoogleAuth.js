import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { signIn, signOut } from 'redux/actions';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '701990213671-efm5g8cd92l1fkj99klgu0ajo0o067df.apps.googleusercontent.com',
          scope: 'email'
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();

          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
    const { signIn, signOut } = this.props; 
    if (isSignedIn) {
      signIn(this.auth.currentUser.get().getId());
    } else {
      signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    const { isSignedIn } = this.props;   
    if (isSignedIn === null) {
      return null;
    } else if (isSignedIn) {
      return (
        <Button variant="danger" onClick={this.onSignOutClick}> 
            <span className="buttonContent"><i className="fab fa-google"></i></span>
            <span className="buttonContent"> Sign Out</span> 
        </Button> 
      );
    } else {
      return (
        <Button onClick={this.onSignInClick}> 
            <span className="buttonContent"><i className="fab fa-google"></i></span>
            <span className="buttonContent"> Sign In with Google</span> 
        </Button> 
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);