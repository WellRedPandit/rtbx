'use strict';

import React from 'react';
import Button from 'react-toolbox/lib/button';

var App = React.createClass({
  render: function() {
    return (
      <div>
        <div className='row'>
          <div className="small-12 columns">
            <Button label="Hello world" kind="raised" accent />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = App;
