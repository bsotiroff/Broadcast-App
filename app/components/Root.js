import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

export class Root extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <Navbar />
        <main>
          <Switch>
            <Route path="/broadcaster" component={Broadcaster} />
            <Route path="/listener" component={Listener} />
          </Switch>
        </main>
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => {

// };

// export default withRouter(
//   connect(

//   )(Root)
// );
