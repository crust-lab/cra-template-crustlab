import React, { useState } from 'react';
import { Avatar, Table } from 'antd';
import type { TableProps } from 'antd';
import type { ColumnsType, SorterResult } from 'antd/es/table/interface';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useGetUsersQuery } from '../../services/usersApi';
import { UserLocation, User } from '../../services/usersApi/types';
import { useAppDispatch } from '../../store/hooks';
import { setSelectedUser } from '../../store/users/slice';
import { getMediaQueryBreakpoint, getSpacing } from '../../theme/styleUtils';

const UsersPage = () => {
  const { t } = useTranslation();
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [orderInfo, setOrderInfo] = useState<SorterResult<User>>({});

  const onChange: TableProps<User>['onChange'] = (
    _pagination,
    _filters,
    sorter
  ) => {
    setOrderInfo(sorter as SorterResult<User>);
  };

  const { data, isFetching } = useGetUsersQuery({ page, pageSize });
  const dispatch = useAppDispatch();
  const history = useNavigate();

  const columns: ColumnsType<User> = [
    {
      title: t('pages.usersPage.pictureLabel'),
      key: 'users-column-picture',
      dataIndex: 'picture',
      align: 'center' as const,
      width: 100,
      render: ({ thumbnail }) => <Avatar src={thumbnail} />,
    },
    {
      title: t('pages.usersPage.nameLabel'),
      key: 'users-column-name',
      dataIndex: 'name',
      render: ({ first, last, title }) => `${title} ${first} ${last}`,
      sorter: ({ name: a }, { name: b }) => a.first.localeCompare(b.first),
      sortOrder: orderInfo.columnKey === 'name' ? orderInfo.order : null,
    },
    {
      title: t('pages.usersPage.emailLabel'),
      key: 'users-column-email',
      dataIndex: 'email',
      sorter: ({ email: a }, { email: b }) => a.localeCompare(b),
      sortOrder: orderInfo.columnKey === 'email' ? orderInfo.order : null,
    },
    {
      title: t('pages.usersPage.phoneLabel'),
      key: 'users-column-phone',
      dataIndex: 'phone',
      sorter: ({ phone: a }, { phone: b }) => a.localeCompare(b),
      sortOrder: orderInfo.columnKey === 'phone' ? orderInfo.order : null,
    },
    {
      title: t('pages.usersPage.countryLabel'),
      key: 'users-column-country',
      dataIndex: 'location',
      render: ({ country }: UserLocation) => country,
      sorter: ({ location: { country: a } }, { location: { country: b } }) =>
        a.localeCompare(b),
      sortOrder: orderInfo.columnKey === 'country' ? orderInfo.order : null,
    },
  ];

  return (
    <StyledTable
      loading={isFetching}
      columns={columns}
      onChange={onChange}
      dataSource={data?.results.map((item) => ({
        ...item,
        key: item.login.uuid,
      }))}
      pagination={{
        position: ['bottomCenter'],
        total: 200,
        onChange: (newPage, newPageSize) => {
          setPage(newPage);
          setPageSize(newPageSize);
        },
      }}
      onRow={(user) => ({
        onClick: () => {
          dispatch(setSelectedUser(user));
          history(user?.login?.uuid);
        },
      })}
      scroll={{
        y: '70vh',
        x: 'max-content',
      }}
    />
  );
};

const StyledTable: typeof Table = styled(Table)`
  @media ${getMediaQueryBreakpoint('md')} {
    margin-top: ${getSpacing('spacing32')}px;
  }
  border-radius: ${getSpacing('spacing32')}px;
`;

export default UsersPage;
