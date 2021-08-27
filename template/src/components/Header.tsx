import React from 'react';
import {Layout} from 'antd';
import styled from 'styled-components';

const Header = () => (
    <HeaderWrapper>
        LOGO Example App
    </HeaderWrapper>
);

const HeaderWrapper = styled(Layout.Header)`
    background-color: ${props => props.theme.color.primary};
    color: ${props => props.theme.fontColor.secondary};
`;

export default Header;
