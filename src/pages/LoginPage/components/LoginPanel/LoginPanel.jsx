import React, { Component } from 'react';
import { Grid } from '@icedesign/base';
import LoginIntro from './LoginIntro';
import LoginForm from './LoginForm';

const { Row, Col } = Grid;

export default class LoginPanel extends Component {
  static propTypes = {};

  static defaultProps = {};

  componentDidMount() {
    sessionStorage.clear();
  }

  render() {
    return (
      <div style={styles.container}>
          {/*<Col l="16" style={styles.col}>
            <LoginIntro />
          </Col>*/}
            <div style={styles.content}>
                <div style={styles.logo}></div>
                <LoginForm/>
            </div>
            <div style={styles.footer}>
              <div  style={styles.footerRow}>
                <span style={{fontSize: '12px'}}>版权所有@河钢数字技术股份有限公司 | 版本1.0.0</span>
              </div>
              <div style={styles.footerRow}>WeShare物联网大数据平台让您的数据焕发全新生产力</div>
            </div>
      </div>
    );
  }
}

const styles = {
  container: {
    position: 'relative',
    width: '100wh',
    minWidth: '1200px',
    height: '100vh',
    backgroundImage: `url(${require('./images/bg2.jpg')})`,
    backgroundSize: 'cover',
    display: 'flex'
  },
  row: {
    padding: '0',
  },
  col: {
    padding: '0',
  },
  logo: {
    width: '140px',
    height: '140px',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    margin : 'auto 35px',
    marginRight: '15px',
    backgroundImage: `url(${require('./images/logo1.jpg')})`,
    backgroundSize: 'cover',
  },
  content: {
    position: 'absolute',
    top: '0',
    left: '0',
    bottom: '0',
    right: '0',
    margin: 'auto',
    height: '280px',
    width: '520px',
    background: 'rgba(0,91,172,0.35)',
    border: '1px solid #007CD4',
    borderRadius: '6px',
    display: 'flex',
  },
  footer: {
    fontSize: '14px',
    margin: '18px auto',
    textAlign: 'center',
    color: '#666',
    display: 'flex',
    flexDirection: 'column-reverse'
  },
  footerRow:{
    marginBottom: '8px',
  }
};
