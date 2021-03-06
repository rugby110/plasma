import React from 'react';
import style from './style.scss';

class Tooltip extends React.Component {
  render() {
    return (
      <div className={style.wrapper}>
        { this.props.children }
        <div className={style.content}>
          {this.props.content}
        </div>
      </div>
    );
  }
}

Tooltip.defaultProps = {
  children: 'test',
  content: 'Protip: Tooltips can be used to reveal information.',
};

Tooltip.propTypes = {
  children: React.PropTypes.node.isRequired,
  content: React.PropTypes.node,
};

Tooltip.displayName = 'Tooltip';

export default Tooltip;
