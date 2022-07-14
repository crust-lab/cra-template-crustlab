import { Avatar, Table } from 'antd';
import type { TableProps } from 'antd';
import type { ColumnsType, SorterResult } from 'antd/es/table/interface';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useGetUsersQuery } from '../services/usersApi/usersApi';
import { UserLoaction, User } from '../services/usersApi/usersType';

const UsersPage = () => {
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
      title: 'Picture',
      align: 'center' as const,
      dataIndex: 'picture',
      width: 100,
      key: 'picture',
      render: ({ thumbnail }) => <Avatar src={thumbnail} />,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      width: 300,
      key: 'name',
      render: ({ first, last, title }) => `${title} ${first} ${last}`,
      sorter: ({ name: a }, { name: b }) => a.first.localeCompare(b.first),
      sortOrder: sortedInfo.columnKey === 'name' ? sortedInfo.order : null,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      sorter: ({ email: a }, { email: b }) => a.localeCompare(b),
      sortOrder: sortedInfo.columnKey === 'email' ? sortedInfo.order : null,
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
      sorter: ({ phone: a }, { phone: b }) => a.localeCompare(b),
      sortOrder: sortedInfo.columnKey === 'phone' ? sortedInfo.order : null,
    },
    {
      title: 'Country',
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
  margin-top: 30px;
  border-radius: 30px;
`;

export default UsersPage;
