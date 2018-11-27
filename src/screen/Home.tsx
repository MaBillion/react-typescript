import * as React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  public render() {
    return (
      <div className="Home">
        Home
        <Link to='/MessageCenter'>MessageCenter</Link>
      </div>
    );
  }
}

export default Home;
