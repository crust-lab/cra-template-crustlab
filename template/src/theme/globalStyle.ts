import { createGlobalStyle } from 'styled-components';
import { getColor, getSpacing } from './styleUtils';

const GlobalStyle = createGlobalStyle`
    .ant-layout-sider {
        min-height: 100%;
        .ant-layout-sider-children {
            display: flex;
            flex-direction: column;
        }
    }

    .ant-menu-item, .ant-menu, .ant-layout-sider {
        background: ${getColor('primary')};
    } 

    .ant-menu-item {
        display: flex;
        align-items: center;
    }

    .ant-dropdown-trigger > svg {
        color: white;
    }

    .ant-menu-item:hover {
        background: ${getColor('primaryHover')} !important;
    }

    .ant-layout-sider-trigger {
        background: ${getColor('secondary')} !important; 
    }

    .ant-menu-vertical  {
        border-right: none;
    }

    .ant-menu-vertical .ant-menu-item {
        margin: 0 !important;
    }

    .ant-breadcrumb li:last-child a {
        color: ${getColor('secondary')} !important;
    }

    .ant-table {
        border-radius: ${getSpacing('spacing24')}px;
    }

    .ant-table-container table > thead > tr:first-child th:first-child {
        border-top-left-radius: ${getSpacing('spacing24')}px;
    }

    .ant-table-container table > thead > tr:first-child th:last-child {
        border-top-right-radius: ${getSpacing('spacing24')}px; 
    }

    .ant-table-tbody > tr:last-child > td {
        border-bottom: none;
        border-bottom-left-radius: ${getSpacing('spacing24')}px;
        border-bottom-right-radius: ${getSpacing('spacing24')}px;
    }
`;

export default GlobalStyle;
