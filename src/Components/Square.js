import React from 'react';
import './Square.scss';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  click = () => {
    // alert('click');
    console.log('*** CLICK on', this.props.value);
    this.setState({ value: 'X' });
  };

  render() {
    return (
      <button
        className="square"
        value={this.props.value}
        onClick={this.click}
      >
        {/* {this.props.value} */}
        {this.state.value}
      </button>
    );
  }
}

export default Square;