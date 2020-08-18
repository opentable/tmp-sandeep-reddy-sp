import React from 'react';
import styles from './mail.css';

class Mail extends React.Component {
  
  constructor() {
    super();
    this.mailContainer = React.createRef();
    this.mailAddress = React.createRef();
    
    this.state = {
      top: 0,
      left: 0,
      verticalDirection: 1,
      horizondalDirection: 1
    };
  }

  getTop = () => {
    const changeDiff = 1;
    const fontSize = 36;
    const maxHeight = this.mailContainer.current.clientHeight - fontSize;

    if (this.state.top + changeDiff < maxHeight && this.state.verticalDirection === 1 ) {
      const newValue = this.state.top + changeDiff;
      this.setState({top: newValue});
      return newValue
    }

    if (this.state.top + changeDiff >= maxHeight) {
      const newValue = this.state.top - changeDiff;
      this.setState({top: newValue});
      this.setState({verticalDirection: -1});
    }

    if (this.state.top - changeDiff > 0 && this.state.verticalDirection === -1 ) {
      const newValue = this.state.top - changeDiff;
      this.setState({top: newValue});
      return newValue
    }

    if (this.state.top - changeDiff <= 0) {
      const newValue = this.state.top + changeDiff;
      this.setState({top: newValue});
      this.setState({verticalDirection: 1});
    }

    return this.state.top
  }

  getLeft = () => {
    const changeDiff = 1;
    const maxWidth = this.mailContainer.current.clientWidth;
    const selfWidth = this.mailAddress.current.clientWidth;

    if (this.state.left + (changeDiff + selfWidth) < maxWidth && this.state.horizontalDirection === 1 ) {
      const newValue = this.state.left + changeDiff;
      this.setState({left: newValue});
      return newValue
    }

    if (this.state.left + (changeDiff + selfWidth) >= maxWidth) {
      const newValue = this.state.left - changeDiff;
      this.setState({left: newValue});
      this.setState({horizontalDirection: -1});
    }

    if (this.state.left - changeDiff > 0 && this.state.horizontalDirection === -1 ) {
      const newValue = this.state.left - changeDiff;
      this.setState({left: newValue});
      return newValue
    }

    if (this.state.left - changeDiff <= 0) {
      const newValue = this.state.left + changeDiff;
      this.setState({left: newValue});
      this.setState({horizontalDirection: 1});
    }

    return this.state.left;
  }

  getColor = () => {
    console.log(this.state.verticalDirection == 1 ? 'white' : 'black')
    return this.state.verticalDirection == 1 ? 'white' : 'black';
  }

  updateStyle = () => {
    this.setState({ 
      top: this.getTop(),
      left: this.getLeft(),
      color: this.getColor()
    });
  }

  componentDidMount() {
    setInterval(this.updateStyle, 10);
  }

  render() {
    const style = {
      position: 'absolute',
      top: `${this.state.top}px`,
      left: `${this.state.left}px`,
      color: this.state.color
    }

    return (
      <a href="mailto:t@spicy.computer" className="mail" ref={this.mailContainer}>
        <div className="address" style={style} ref={this.mailAddress}>
          t@spicy.computer
        </div>
      </a>
    )
  }
}

export default Mail;
