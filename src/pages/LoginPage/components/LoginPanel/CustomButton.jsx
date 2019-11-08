import React from 'react';
import { Button } from '@icedesign/base';

const CustomButton = (props) => {
  return <Button {...props} style={{ ...styles.button, ...props.style }} />;
};

export default CustomButton;

const styles = {
  button: {
    marginTop: '30px',
    width: '210px',
    height: '32px',
    lineHeight: '32px',
    textAlign: 'center',
    borderRadius: '6px',
    border: '1px solid #9816f4',
    background: 'linear-gradient(to right,#005BAC 0%, #3399FF 100%)',
  },
};
