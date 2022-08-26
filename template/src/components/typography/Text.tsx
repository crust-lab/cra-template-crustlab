import React from 'react';
import AntText from 'antd/lib/typography/Text';
import { TextProps as AntTextProps } from 'antd/lib/typography/Text';

type TextProps = AntTextProps & {
  text?: string;
};

const Text = ({ text, ...rest }: TextProps) => (
  <AntText {...rest}>{text}</AntText>
);

export default Text;
