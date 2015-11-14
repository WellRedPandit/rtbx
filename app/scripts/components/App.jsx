import React from 'react';
import Button from 'react-toolbox/lib/button';

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Button label="Hello world" kind="raised" accent />
      </div>
    );
  }
});

module.exports = App;
