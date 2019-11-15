import React, { PureComponent } from 'react';

import './scss/dark.scss';
import './scss/light.scss';
import logoImage from '../../images/logo1.png'

export default class Logo extends PureComponent {
  render() {
    return (
      <div style={styles.container}>
        <img style={styles.img} src={logoImage}></img>
        大数据存储平台
      </div>
    );
  }
}

const styles = {
  container: {
    backgroundSize: 'cover',
    width:"200px",
    height: '80px',
    backgroundColor:'#007cd4',
    color: '#fff',
    lineHeight: '60px',
    fontSize: '18px',
  },
  img: {
    height: "50px",
    width: "50px",
    position: 'relative',
    top: '15px',
    marginRight: '5px',
  },
}