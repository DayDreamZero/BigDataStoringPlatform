/* eslint no-undef:0, no-unused-expressions:0, array-callback-return:0 */
import React, { Component } from 'react';
import Layout from '@icedesign/layout';
import { withRouter } from 'react-router';
import { enquire } from 'enquire-js';

import Header from './components/Header';

import Aside from './components/Aside';

import Footer from './components/Footer';

import MainRoutes from './MainRoutes';


import './scss/index.scss';

// 设置默认的皮肤配置，支持 dark 和 light 两套皮肤配置
const theme = 'dark';

@withRouter
export default class BasicLayout extends Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);

    this.state = {
      isScreen: undefined,
    };
  }

  componentDidMount() {
    this.enquireScreenRegister();
  }

  /**
   * 注册监听屏幕的变化，可根据不同分辨率做对应的处理
   */
  enquireScreenRegister = () => {
    const isMobile = 'screen and (max-width: 720px)';
    const isTablet = 'screen and (min-width: 721px) and (max-width: 1199px)';
    const isDesktop = 'screen and (min-width: 1200px)';

    enquire.register(isMobile, this.enquireScreenHandle('isMobile'));
    enquire.register(isTablet, this.enquireScreenHandle('isTablet'));
    enquire.register(isDesktop, this.enquireScreenHandle('isDesktop'));
  };

  enquireScreenHandle = (type) => {
    const handler = {
      match: () => {
        this.setState({
          isScreen: type,
        });
      },
    };

    return handler;
  };

  render() {
    const isMobile = this.state.isScreen !== 'isDesktop';
    const layoutClassName = `ice-design-layout-${theme} ice-design-layout ice-design-fluid-layout`;

    const header = <Header theme={theme} isMobile={isMobile} />;

    const aside = (
      <Layout.Aside theme={theme} width="200px">
        <Aside isMobile={isMobile} />
      </Layout.Aside>
    );

    const footer = <Footer />;

    const content = <MainRoutes />;

    const layout = (
      <Layout fixable>
        {header}
        <Layout.Section>
          {aside}
          <Layout.Main scrollable
            
          >{content}</Layout.Main>
        </Layout.Section>
        {footer}
      </Layout>
    );

    return <div className={layoutClassName}>{layout}</div>;
  }
}
