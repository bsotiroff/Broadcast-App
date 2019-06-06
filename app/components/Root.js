import React from 'react';
import { withRouter, Route, Switch, Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import Listener from './Listener';
import Broadcaster from './Broadcaster';
import Hello from './Hello';

export default class Root extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <Link to="/broadcaster">broadcaster</Link>
        <Link to="/listener">listener</Link>
        <main>
          <Switch>
            <Route exact path="/" component={Hello} />
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
