import PropTypes from 'prop-types';
import React from 'react';
import './styles.css';

export default class Control extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    forID: PropTypes.string,
    value: PropTypes.node,
    classNameWrapper: PropTypes.string.isRequired,
  }

  static defaultProps = {
    value: '0',
  }

  render() {
    const {
      forID,
      value,
      onChange,
      classNameWrapper,
    } = this.props;


    var inputStyle = {
      position: 'absolute',
      top: '-10px',
      left: '0',
      width: '100%',
      height: '100%',
      padding: '0',
      margin: '0',
      appearance: 'none',
      border: 'none',
      background: 'transparent',
      color: 'transparent',
      overflow: 'visible'
    };

    return (
      <div class={classNameWrapper}>
        <div class="range-wrapper">
          <input
            type="range"
            min="0"
            max="10"
            step="0.5"
            id={forID}
            className={classNameWrapper}
            value={value || ''}
            onChange={e => onChange(e.target.value)}
            style={inputStyle}
          />
           <div class="custom-track">
            <span class="custom-fill"></span>
            <span class="custom-thumb"></span>
          </div>
          <output for={forID} aria-hidden="true" class="curr-value">{value || ''}</output>
        </div>
      </div>
    );
  }
}