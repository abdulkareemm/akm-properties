import React from "react";
import { PropertiesFormStepProps } from ".";
import { Button, Form, Input, Select } from "antd";

export default function Location({
  currentStep,
  setCurrentStep,
  finalValues,
  setFinalValues,
}: PropertiesFormStepProps) {
  const onFinish = (values: any) => {
    setFinalValues({ ...finalValues, basic: values });
    setCurrentStep(currentStep + 1);
  };
  return (
    <Form
      layout="vertical"
      onFinish={onFinish}
      initialValues={finalValues.location}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <Form.Item
          name="city"
          label="City"
          rules={[
            {
              required: true,
              message: "Please input city!",
            },
          ]}
        >
          <Input placeholder="City" />
        </Form.Item>
        <Form.Item
          name="pincode"
          label="Pincode"
          rules={[
            {
              required: true,
              message: "Please input pincode!",
            },
          ]}
        >
          <Input className="w-full" placeholder="Pincode" />
        </Form.Item>
        <Form.Item
          name="landmark"
          label="Landmark"
          rules={[
            {
              required: true,
              message: "Please input landmark!",
            },
          ]}
        >
          <Input placeholder="Landmark" />
        </Form.Item>
        <Form.Item
          name="address"
          label="Address"
          rules={[
            {
              required: true,
              message: "Please input address!",
            },
          ]}
          className="col-span-1 lg:col-span-3"
        >
          <Input.TextArea rows={6} placeholder="Address" />
        </Form.Item>
      </div>
      <div className="flex justify-end gap-5 mt-7">
        <Button type="primary" onClick={() => setCurrentStep(currentStep - 1)}>
          Back
        </Button>
        <Button type="primary" onClick={() => setCurrentStep(currentStep + 1)}>
          Next
        </Button>
      </div>
    </Form>
  );
}
