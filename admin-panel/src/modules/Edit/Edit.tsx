import { Input } from 'antd';
import { Button, Form, ConfigProvider } from 'antd';

import classes from './Edit.module.css';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const onFinish = (values: any) => {
  console.log(values);
};

const Edit = () => {
  const buttonStyle = {
    width: '373px',
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
      validateMessages={validateMessages}
      className={classes.form}
    >
      <h2 className={classes.legend}>Изменить данные</h2>
      <Form.Item
        label="Название"
        name={['user', 'name']}
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Глава">
        <Input />
      </Form.Item>
      <Form.Item label="Теги">
        <Input />
      </Form.Item>
      <Form.Item label="Текст">
        <Input.TextArea />
      </Form.Item>

      <Form.Item label={null}>
        <ConfigProvider
          theme={{
            components: {
              Button: {
                colorPrimary: '#d62370',
                colorPrimaryHover: '#eb67a0',
                colorPrimaryActive: '#eb67a0',
                controlHeight: 32,
                borderRadius: 8,
              },
            },
          }}
        >
          <Button color="primary" variant="solid" style={buttonStyle}>
            Загрузить
          </Button>
        </ConfigProvider>
      </Form.Item>
    </Form>
  );
};

export default Edit;
