import React, { PureComponent } from 'react';

import './scss/dark.scss';
import './scss/light.scss';
import logoImage from '../../images/logo1.png'

export default class Logo extends PureComponent {
  render() {
    return (
      <div style={styles.container}>
        <img style={styles.img} src={logoImage}></img>
        <span style={{lineHeight: '15px'}}>WeShare存储计算平台</span>
      </div>
    );
  }
}

const styles = {
  container: {
    backgroundSize: 'cover',
    width: '200px',
    height: '80px',
    backgroundColor:'#007cd4',
    color: '#fff',
    fontSize: '15px',
  },
  img: {
    height: "45px",
    width: "45px",
    position: 'relative',
    top: '17.5px',
    padding: '5px',
  },
}