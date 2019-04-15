import React from 'react';
import PropTypes from 'prop-types';
import './Icon.scss';

export default class Icon extends React.Component {
  render() {
    const {
      icon, className, style, fill, ...other
    } = this.props;

    const classname = className
      ? `${className}  vz-odt--icon`
      : 'vz-odt--icon';

    const svgProps = {
      fill,
      style,
      className: classname,
      title: icon.title,
      viewBox: icon.viewBox,
      width: icon.width,
      height: icon.height,
      xmlns: 'http://www.w3.org/2000/svg',
      focusable: 'false',
      other
    };

    return (<svg {...svgProps}>{icon.paths}</svg>);
  }
}

Icon.propTypes = {
  icon: PropTypes.object,
  className: PropTypes.string
};
