import { createGlobalStyle } from 'styled-components';
import { getSpacing } from './styleUtils';

const GlobalStyle = createGlobalStyle`
    .ant-layout-sider {
        min-height: 100%;
        .ant-layout-sider-children {
            display: flex;
            flex-direction: column;
        }
    }

    .ant-menu-item, .ant-menu, .ant-layout-sider {
        background: ${({ theme: { colors } }) => colors.primary};
    } 

    .ant-menu-item {
        display: flex;
        align-items: center;
    }

    .ant-dropdown-trigger > svg {
        color: white;
    }

    .ant-menu-item:hover {
        background: ${({ theme: { colors } }) => colors.hover} !important;
    }

    .ant-layout-sider-trigger {
        background: ${({ theme: { colors } }) => colors.secondary} !important; 
    }

    .ant-menu-vertical  {
        border-right: none;
    }

    .ant-menu-vertical .ant-menu-item {
        margin: 0 !important;
    }

    .ant-breadcrumb li:last-child a {
        color: ${({ theme: { colors } }) => colors.primary} !important;
    }

    .ant-table {
        border-radius: ${getSpacing('spacing05')}px;
    }

    .ant-table-container table > thead > tr:first-child th:first-child {
        border-top-left-radius: ${getSpacing('spacing05')}px;
    }

    .ant-table-container table > thead > tr:first-child th:last-child {
        border-top-right-radius: ${getSpacing('spacing05')}px; 
    }

    .ant-table-tbody > tr:last-child > td {
        border-bottom: none;
        border-bottom-left-radius: ${getSpacing('spacing05')}px;
        border-bottom-right-radius: ${getSpacing('spacing05')}px;
    }
`;

export default GlobalStyle;
