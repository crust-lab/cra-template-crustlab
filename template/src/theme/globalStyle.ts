import { createGlobalStyle } from 'styled-components';
import { getColor, getSpacing } from './styleUtils';

const GlobalStyle = createGlobalStyle`
    :root {
        --ant-primary-color: ${getColor('primary')};
        --ant-primary-color-hover: ${getColor('primary05')}};
        --ant-primary-color-active: ${getColor('primary07')};
        --ant-primary-color-outline:${getColor('primary03')}; 
        --ant-primary-1: ${getColor('primary01')};
        --ant-primary-2: ${getColor('primary02')};
        --ant-primary-3: ${getColor('primary03')};
        --ant-primary-4: ${getColor('primary04')};
        --ant-primary-5: ${getColor('primary05')};
        --ant-primary-6: ${getColor('primary06')};
        --ant-primary-7: ${getColor('primary07')};
        --ant-primary-8: ${getColor('primary08')};
        --ant-primary-9: ${getColor('primary09')};
        --ant-primary-10: ${getColor('primary10')};
    }

    .ant-layout-sider {
        min-height: 100%;
        .ant-layout-sider-children {
            display: flex;
            flex-direction: column;
        }
    }

    .ant-menu-item, .ant-menu, .ant-layout-sider {
        color: ${getColor('textHover')};
        background: ${getColor('primary')};
    } 

    .ant-menu-item {
        display: flex;
        align-items: center;
        .ant-menu-title-content {
            font-weight: 400;
        }
        .ant-menu-item-icon > svg {
            height: ${({ theme: { spacing } }) =>
              spacing.spacing16 + spacing.spacing4}px;
            width: ${({ theme: { spacing } }) =>
              spacing.spacing16 + spacing.spacing4}px;
        }
    }

    .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
        background-color: ${getColor('primaryHover')} !important;
        color: ${getColor('text01')} !important;
        .ant-menu-title-content {
            font-weight: 900 !important;
        }
    }

    .ant-menu:not(.ant-menu-inline-collapsed):not(.ant-menu-horizontal) .ant-menu-item-selected   {
        .ant-menu-item-icon > svg {
            height: ${getSpacing('spacing24')}px !important;
            width: ${getSpacing('spacing24')}px !important;
        }
    }

    .ant-dropdown-trigger > svg {
        color: white;
    }

    .ant-menu-item:hover {
        background: ${getColor('primaryHover')} !important;
        color: ${getColor('textHover')} !important;
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
    }

    .ant-table-tbody > tr:last-child > td:last-child {
        border-bottom-right-radius: ${getSpacing('spacing24')}px;
    }

    .ant-table-tbody > tr:last-child > td:first-child {
        border-bottom-left-radius: ${getSpacing('spacing24')}px;
    }

    .ant-table-row:hover {
        cursor: pointer;
    }

    .ant-select:not(.ant-select-customize-input) .ant-select-selector {
        border-radius: ${getSpacing('spacing24')}px;
    }

    .ant-breadcrumb a, .ant-breadcrumb-separator {
        color: ${getColor('text02')};
    }

    .ant-table-thead>tr>th, .ant-table-tbody>tr>td {
        background: ${getColor('secondaryBackground')};
        color: ${getColor('text02')};
    }

    .ant-table-container {
        background: ${getColor('primaryBackground')}; 
    }

    .ant-select:not(.ant-select-customize-input) .ant-select-selector, .ant-select-arrow {
        background: ${getColor('secondaryBackground')};
        color: ${getColor('text02')};
    }

    .ant-pagination-item {
        background: ${getColor('secondaryBackground')};
        a {
            color: ${getColor('text02')}; 
        } 
    }

    .ant-pagination-item-link {
        background-color: ${getColor('secondaryBackground')} !important; 
        svg {
            color: ${getColor('text02')};  
        }
    }

    .ant-table-tbody>tr.ant-table-row:hover>td, .ant-table-tbody>tr>td.ant-table-cell-row-hover {
        background: ${getColor('primaryBackground')};
        border-left: 1px solid ${getColor('secondaryBackground')}; 
    }

    .ant-table-column-sorter {
        color: ${getColor('text02')};
    }

    .ant-table-cell-scrollbar:not([rowspan]) {
        box-shadow: none; 
    }

    .ant-table-thead>tr>th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan]):before {
        background-color: ${getColor('primaryBackground')}; 
    }

    .ant-table-thead th.ant-table-column-has-sorters.ant-table-cell-fix-left:hover, .ant-table-thead th.ant-table-column-has-sorters.ant-table-cell-fix-right:hover, .ant-table-thead th.ant-table-column-sort {
        background-color: ${getColor('secondaryBackground')};  
    }

    .ant-table-tbody>tr.ant-table-placeholder:hover>td {
        background: ${getColor('secondaryBackground')};  
    }

    .ant-empty-normal {
        color: ${getColor('text02')};
    }

    .adm-tab-bar-item-active {
        color: ${getColor('primary')} !important;
    }

    .ant-pagination-item-active:focus-visible a, .ant-pagination-item-active:hover a {
        color: ${getColor('primary')} !important; 
    }

    .ant-pagination-item:hover {
        border-color: ${getColor('primary')} !important; 
    }
`;

export default GlobalStyle;
