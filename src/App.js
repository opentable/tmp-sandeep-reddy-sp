import React from 'react';
import Phone from './sections/phone/Phone';
import Mail from './sections/mail/Mail';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Phone />
        <Mail />
      </React.Fragment>
    );
  };
}

export default App;