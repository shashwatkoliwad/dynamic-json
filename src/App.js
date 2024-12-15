import React, { useState } from "react";
import { message, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import DynamicForm from "./DynamicForm";
import defaultFormSchema from "./formSchema.json"; // Default JSON file

const App = () => {
  const [formSchema, setFormSchema] = useState(defaultFormSchema);

  const handleFileUpload = (file) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const json = JSON.parse(e.target.result);
        setFormSchema(json);
        message.success("Form schema loaded successfully!");
      } catch (err) {
        message.error("Invalid JSON file!");
      }
    };

    reader.readAsText(file);
    return false;
  };

  const handleFinish = (values) => {
    console.log("Form Values:", values);
    message.success("Form submitted successfully!");
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: 20 }}>
      <h1>Dynamic JSON Form</h1>

      {/* File Upload */}
      <div style={{ marginBottom: 20 }}>
        <Upload beforeUpload={handleFileUpload} accept=".json">
          <Button icon={<UploadOutlined />}>Upload JSON File</Button>
        </Upload>
      </div>

      <DynamicForm formSchema={formSchema} onFinish={handleFinish} />
    </div>
  );
};

export default App;
