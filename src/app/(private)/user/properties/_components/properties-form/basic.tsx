import React from "react";
import { PropertiesFormStepProps } from ".";
import { Button, Form, Input, InputNumber, Select } from "antd";
import { propertyStatuses, propertyTypes } from "@/constants";

export default function Basic({
  currentStep,
  setCurrentStep,
  finalValues,
  setFinalValues,
}: PropertiesFormStepProps) {
  const onFinish = (values: any) => {
    setFinalValues({ ...finalValues, basic: values });
    setCurrentStep(currentStep + 1)
  };
  return (
    <Form layout="vertical" initialValues={finalValues.basic} onFinish={onFinish}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <Form.Item
          name="name"
          label="Property Name"
          rules={[
            {
              required: true,
              message: "Please input property name!",
            },
          ]}
          className="col-span-1 lg:col-span-3"
        >
          <Input className="" placeholder="Property Name" />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[
            {
              required: true,
              message: "Please input description!",
            },
          ]}
          className="col-span-1 lg:col-span-3"
        >
          <Input.TextArea rows={6} className="" placeholder="Description" />
        </Form.Item>
        <Form.Item
          name="type"
          label="Type"
          rules={[
            {
              required: true,
              message: "Please input type!",
            },
          ]}
        >
          <Select options={propertyTypes}  />
        </Form.Item>
        <Form.Item
          name="status"
          label="Status"
          rules={[
            {
              required: true,
              message: "Please input status!",
            },
          ]}
        >
          <Select
            options={propertyStatuses}
          />
        </Form.Item>
        <Form.Item
          name="price"
          label="Price"
          rules={[
            {
              required: true,
              message: "Please input price!",
            },
          ]}
        >
          <InputNumber type="number" placeholder="Price" className="w-full"/>
        </Form.Item>
      </div>
      <div className="flex justify-end gap-5">
        <Button
          type="primary"
          onClick={() => setCurrentStep(currentStep - 1)}
        >
          Back
        </Button>
        <Button htmlType="submit" type="primary" >
          Next
        </Button>
      </div>
    </Form>
  );
}
