import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { MATERIALS, HEADERS_TABLE } from '../../data/data';
import { useAuthStore } from '../../store/authStore';
import type { IMaterial } from '../../types/types';
import { Space, Table, Tag, ConfigProvider, Spin } from 'antd';
import type { TableProps } from 'antd';

import classes from './Materials.module.css';
import { useFetchMaterials } from '../../hooks/useFetchMaterials';

const Materials = () => {
  const username = useAuthStore((state) => state.username);
  const { materials, loading, error } = useFetchMaterials();

  const columns: TableProps<IMaterial>['columns'] = [
    ...HEADERS_TABLE.map((header) => ({
      ...header,
      align: 'center' as const,
    })),
    {
      title: 'Теги',
      key: 'tags',
      dataIndex: 'tags',
      align: 'center',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'изменить/удалить',
      key: 'action',
      align: 'center',
      render: () => (
        <Space size="middle">
          <Link to={`/${username}/edit`} className={classes.link}>
            <FaEdit className={classes.editIcon} />
          </Link>
          <Link to="delete">
            <FaTrash className={classes.deleteIcon} />
          </Link>
        </Space>
      ),
    },
  ];

  return (
    <>
      {loading ? (
        <Spin />
      ) : error ? (
        <div>
          <p>{error}</p>
        </div>
      ) : (
        <ConfigProvider
          theme={{
            token: {
              fontFamily: 'Roboto, sans-serif',
              fontSize: 16,
            },
            components: {
              Table: {
                borderColor: '#ffa019',
                headerBg: '#ffa019',
                headerColor: '#fff',
                headerSortActiveBg: '#e6f7ff',
                headerSortHoverBg: '#f0f0f0',
                headerSplitColor: 'rgba(255, 255, 255, 0.4)',
                rowHoverBg: '#ffddac',
              },
            },
          }}
        >
          <Table<IMaterial> columns={columns} dataSource={MATERIALS} />
        </ConfigProvider>
      )}
    </>
  );
};

export default Materials;
