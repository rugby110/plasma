import React from 'react';
import style from './style.scss';

class SideNavBarItem extends React.Component {
  render() {
    return (
      <div className={style.itemWrapper}>
        <img
          className={ style.icon }
          style={ this.props.iconStyle }
          src={ this.props.icon }
        />
        { this.props.label }
      </div>
    );
  }
}

SideNavBarItem.defaultProps = {
  label: 'Label'
};

SideNavBarItem.propTypes = {
  /**
  * This should be a URL to an image
  */
  icon: React.PropTypes.string,
  iconStyle: React.PropTypes.object
};

SideNavBarItem.displayName = 'Organism.SideNavBarItem';

export default SideNavBarItem;