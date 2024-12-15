import React from "react";
import { Form, Input, Select, Checkbox, Radio, DatePicker, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const DynamicForm = ({ formSchema, onFinish }) => {
  const [form] = Form.useForm();

  const renderField = (field) => {
    const { type, name, label, rules, placeholder, options, valuePropName } = field;

    switch (type) {
      case "text":
      case "email":
      case "password":
      case "number":
        return (
          <Form.Item name={name} label={label} rules={rules} key={name}>
            <Input type={type} placeholder={placeholder} />
          </Form.Item>
        );

      case "select":
        return (
          <Form.Item name={name} label={label} rules={rules} key={name}>
            <Select placeholder={placeholder}>
              {options.map((option) => (
                <Select.Option key={option.value} value={option.value}>
                  {option.label}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        );

      case "checkbox":
        return (
          <Form.Item
            name={name}
            valuePropName={valuePropName || "value"}
            rules={rules}
            key={name}
          >
            <Checkbox>{label}</Checkbox>
          </Form.Item>
        );

      case "radio":
        return (
          <Form.Item name={name} label={label} rules={rules} key={name}>
            <Radio.Group>
              {options.map((option) => (
                <Radio key={option.value} value={option.value}>
                  {option.label}
                </Radio>
              ))}
            </Radio.Group>
          </Form.Item>
        );

      case "datepicker":
        return (
          <Form.Item name={name} label={label} rules={rules} key={name}>
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
        );

      case "file":
        return (
          <Form.Item name={name} label={label} rules={rules} key={name}>
            <Upload>
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
          </Form.Item>
        );
      default:
        return null;
    }
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      {formSchema.map(renderField)}
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default DynamicForm;
