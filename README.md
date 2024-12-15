# dynamic-json
An application to render a form based on the given json, it uses antd to render fields. 


## **Features**
- Render dynamic forms from a JSON schema.
- Supports various field types: 
  - `text`, `email`, `password`, `number`
  - `select`, `checkbox`, `radio`
  - `datepicker`, `file upload`
- Validation rules for each field.
- File upload functionality to load a custom JSON schema.
- Default fallback schema if no file is provided.


### **Setup Instructions**

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/dynamic-json-form-builder.git
   cd dynamic-json-form-builder


`npm install`
or
`yarn install`

`npm start`
or
`yarn start`

### **Example json file**
```
[
  {
    "type": "text",
    "name": "username",
    "label": "Username",
    "rules": [{ "required": true, "message": "Username is required!" }],
    "placeholder": "Enter your username"
  },
  {
    "type": "email",
    "name": "email",
    "label": "Email",
    "rules": [{ "required": true, "message": "Email is required!" }]
  }
]
```


### Supported Field Types

| Type | Description |
| --- | --- |
| text | Standard text input. |
| email | Input for email addresses. |
| password | Input for passwords (masked). |
| number | Input for numeric values. |
| select | Dropdown menu with predefined options. |
| checkbox | Single or multiple selection using checkboxes. |
| radio | Single selection from a group of radio buttons. |
| datepicker | Date picker for selecting dates. |
| file | File upload button. |




### JSON Schema Fields

| Field | Type | Description |
| --- | --- | --- |
| type | string | Specifies the type of input field (e.g., text, email, select). |
| name | string | Unique identifier for the input field. |
| label | string | Label displayed above the field. |
| rules | array | Validation rules for the field (e.g., required, custom messages). |
| placeholder | string | Placeholder text for input fields (optional). |
| options | array | Used for select, radio, and checkbox fields. Each option must have label and value. |
| valuePropName | string | Used for checkbox fields to bind their checked state. |