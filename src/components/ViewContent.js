import { Component, React } from 'react';

class ViewContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { contents } = this.props;
    return (
      <div className="info">
        <div className="infoHeading">
          <h4>{contents.title}</h4>
          <div className="infoDetails"></div>
        </div>
      </div>
    );
  }
}
