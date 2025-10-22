import { Input } from 'antd';
import { useState } from 'react';
// import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { UploadOutlined } from '@ant-design/icons';
import { Flex, message, Upload, Button, Form, ConfigProvider } from 'antd';
import type { GetProp, UploadProps } from 'antd';
import axios from 'axios';

import classes from './Upload.module.css';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: '${label} обязателен для заполнения!',
};

const UploadForm = () => {
  const [fileList, setFileList] = useState<FileType[]>([]);
  // const [uploading, setUploading] = useState(false);
  // const [textUploading, setTextUploading] = useState(false);

  const handleChange: UploadProps['onChange'] = (info) => {
    const newFileList = info.fileList.map(
      (file) => file.originFileObj as FileType,
    );
    setFileList(newFileList);

    if (newFileList.length > 0) {
      message.success(`Выбран файл: ${info.file.name}`);
    }
  };

  const beforeUpload = (file: FileType) => {
    const isPdf = file.type === 'application/pdf';
    if (!isPdf) {
      message.error('Можно загружать только PDF файлы!');
      return Upload.LIST_IGNORE;
    }
    const isLt10M = file.size / 1024 / 1024 < 10;
    if (!isLt10M) {
      message.error('Файл должен быть меньше 10MB!');
      return Upload.LIST_IGNORE;
    }
    return false;
  };

  const onFinishTextForm = async (values: any) => {
    // setTextUploading(true);

    try {
      console.log('Текстовые данные:', values.user);

      const response = await axios.post('url/materials/text/save', {
        title: values.user.title,
        section: values.user.section,
        tags: values.user.tags,
        text: values.user.text,
      });

      if (response.status === 200) {
        message.success('Текстовые данные успешно сохранены!');
      } else {
        message.error('Ошибка при сохранении текстовых данных');
      }
    } catch (error) {
      message.error('Ошибка сети при сохранении текста');
    } finally {
      // setTextUploading(false);
    }
  };

  const onFinish = async () => {
    if (fileList.length === 0) {
      message.error('Выберите PDF файл!');
      return;
    }

    // setUploading(true);

    try {
      const formData = new FormData();

      formData.append('pdf', fileList[0]);

      const response = await axios.post('url/materials/pdf/save', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        message.success('Материал успешно загружен!');
        setFileList([]);
      } else {
        message.error('Ошибка при загрузке материала');
      }
    } catch (error) {
      message.error('Ошибка сети');
    } finally {
      // setUploading(false);
    }
  };

  const buttonStyle = {
    width: '373px',
  };

  return (
    <>
      <Form
        {...layout}
        name="nest-messages"
        style={{ maxWidth: 600 }}
        validateMessages={validateMessages}
        className={classes.form}
        onFinish={onFinishTextForm}
      >
        <h2 className={classes.legend}>Загрузка нового материала</h2>
        <Form.Item
          label="Название"
          name={['user', 'title']}
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Глава"
          name={['user', 'section']}
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Теги"
          name={['user', 'tags']}
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Текст"
          name={['user', 'text']}
          rules={[{ required: true }]}
        >
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
            <Button
              color="primary"
              htmlType="submit"
              variant="solid"
              style={buttonStyle}
            >
              Загрузить
            </Button>
          </ConfigProvider>
        </Form.Item>
      </Form>

      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
        validateMessages={validateMessages}
        className={classes.form}
      >
        <Form.Item
          label="Источник"
          name={['user', 'pdf']}
          rules={[{ required: true }]}
        >
          <Flex gap="middle" wrap>
            <Upload
              name="pdf"
              fileList={fileList.map((file, index) => ({
                uid: index.toString(),
                name: file.name,
                size: file.size,
                type: file.type,
                originFileObj: file,
              }))}
              beforeUpload={beforeUpload}
              onChange={handleChange}
              maxCount={1}
              accept=".pdf"
              onRemove={() => {
                setFileList([]);
                message.info('Файл удален');
              }}
            >
              <Button icon={<UploadOutlined />}>Выберите PDF файл</Button>
            </Upload>

            {fileList.length > 0 && (
              <div style={{ marginTop: 8, color: '#52c41a' }}>
                ✅ Выбран файл: {fileList[0].name}
              </div>
            )}
          </Flex>
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
            <Button
              color="primary"
              htmlType="submit"
              variant="solid"
              style={buttonStyle}
            >
              Загрузить
            </Button>
          </ConfigProvider>
        </Form.Item>
      </Form>
    </>
  );
};

export default UploadForm;
