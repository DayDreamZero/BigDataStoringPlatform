import React from 'react';
import { Input } from '@icedesign/base';
import styles from './login.module.scss';

const CustomInput = (props) => {
  return <Input {...props} className={styles.nextInput}/>;
};

export default CustomInput;

// const styles = {
//   input: {
//     width: '250px',
//     borderRadius: '6px',
//     borderColor: '#113961',
//     background: 'rgba(0,124,212,0.3)',
//     input: {
//       background: 'rgba(0,124,212,0.3)',
//     }
//   },
// };
