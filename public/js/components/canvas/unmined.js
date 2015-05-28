'use strict';

var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var OverlayTrigger = ReactBootstrap.OverlayTrigger;
var Popover = ReactBootstrap.Popover;

var Pos = require('../position.js');

var Unmined = React.createClass({
  render: function() {
    var posStr = Pos.posToString(this.props.pos);
    var left = Pos.tilePositionLeft(this.props.pos.x);
    var top = Pos.tilePositionTop(this.props.pos.y);
    var posHuman = Pos.posToHumanString(this.props.pos);
    var id = 'pixel_' + posStr;
    return (
      <a
        id={id}
        className="pixel unmined"
        style={{left: left + 'px', top: top + 'px'}}
        // onClick={this.props.setTarget(pixel.pos)}
        tabIndex="0"
        role="button"
      ></a>
    );
  }
});

module.exports = Unmined;
