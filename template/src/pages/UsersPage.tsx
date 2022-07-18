import React, { useState } from 'react';
import { Avatar, Table } from 'antd';
import type { TableProps } from 'antd';
import type { ColumnsType, SorterResult } from 'antd/es/table/interface';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { useGetUsersQuery } from '../services/usersApi/usersApi';
import { UserLoaction, User } from '../services/usersApi/usersType';
import { getSpacing } from '../theme/styleUtils';

const UsersPage = () => {
  const { t } = useTranslation();
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);

  const [sortedInfo, setSortedInfo] = useState<SorterResult<User>>({});

  const onChange: TableProps<User>['onChange'] = (
    _pagination,
    _filters,
    sorter
  ) => {
    setSortedInfo(sorter as SorterResult<User>);
  };

  const { data, isFetching } = useGetUsersQuery({ page, pageSize });

  const columns: ColumnsType<User> = [
    {
      title: t('usersPage.pictureLabel'),
      align: 'center' as const,
      dataIndex: 'picture',
      width: 100,
      key: 'picture',
      render: ({ thumbnail }) => <Avatar src={thumbnail} />,
    },
    {
      title: t('usersPage.nameLabel'),
      dataIndex: 'name',
      width: 300,
      key: 'name',
      render: ({ first, last, title }) => `${title} ${first} ${last}`,
      sorter: ({ name: a }, { name: b }) => a.first.localeCompare(b.first),
      sortOrder: sortedInfo.columnKey === 'name' ? sortedInfo.order : null,
    },
    {
      title: t('usersPage.emailLabel'),
      dataIndex: 'email',
      key: 'email',
      sorter: ({ email: a }, { email: b }) => a.localeCompare(b),
      sortOrder: sortedInfo.columnKey === 'email' ? sortedInfo.order : null,
    },
    {
      title: t('usersPage.phoneLabel'),
      dataIndex: 'phone',
      key: 'phone',
      sorter: ({ phone: a }, { phone: b }) => a.localeCompare(b),
      sortOrder: sortedInfo.columnKey === 'phone' ? sortedInfo.order : null,
    },
    {
      title: t('usersPage.countryLabel'),
      dataIndex: 'location',
      key: 'country',
      render: ({ country }: UserLoaction) => country,
      sorter: ({ location: { country: a } }, { location: { country: b } }) =>
        a.localeCompare(b),
      sortOrder: sortedInfo.columnKey === 'country' ? sortedInfo.order : null,
    },
  ];

  return (
    <StyledTable
      loading={isFetching}
      columns={columns}
      onChange={onChange}
      dataSource={data?.results}
      pagination={{
        position: ['bottomCenter'],
        total: 200,
        onChange: (newPage, newPageSize) => {
          setPage(newPage);
          setPageSize(newPageSize);
        },
      }}
      scroll={{
        y: '70vh',
        x: '30vw',
      }}
    />
  );
};

const StyledTable: typeof Table = styled(Table)`
  margin-top: ${getSpacing('spacing06')}px;
  border-radius: ${getSpacing('spacing06')}px;
`;

export default UsersPage;
