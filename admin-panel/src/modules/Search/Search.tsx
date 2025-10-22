import { Button, ConfigProvider } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Select, Input } from 'antd';

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

import classes from './Search.module.css';

const tags = ['Все', 'tanstack', 'devops', 'react', 'tests', 'typescript'];

const Search = () => {
  return (
    <form className={classes.form}>
      <fieldset className={classes.fieldset}>
        <Input placeholder="Поиск..." className={classes.input} />
        <label htmlFor="select">Фильтр по тегам</label>
        <Select
          id="select"
          defaultValue={tags[0]}
          style={{ width: 120 }}
          onChange={handleChange}
          options={tags.map((tag) => ({ value: tag, label: tag }))}
          className={classes.select}
        />

        <ConfigProvider
          theme={{
            components: {
              Button: {
                colorPrimary: '#69c81f',
                colorPrimaryHover: '#1ea91c',
                colorPrimaryActive: '#69c81f',
                controlHeight: 35,
                borderRadius: 8,

                colorBorder: '#d9d9d9',
                colorText: '#666',
                colorBgContainer: '#fff',

                colorBorderSecondary: '#1ec0c8',
                colorTextSecondary: '#1ec0c8',
              },
            },
          }}
        >
          <Button
            type="primary"
            icon={<SearchOutlined />}
            className={classes.btn}
          >
            Найти
          </Button>
        </ConfigProvider>
      </fieldset>
    </form>
  );
};

export default Search;
