import styled from 'styled-components';
import { Typography } from 'antd';

const { Text } = Typography;

const Footer = () => <FooterText>Created with ❤️ by CrustLab</FooterText>;

export default Footer;

const FooterText = styled(Text)`
  margin: 24px;
`;
