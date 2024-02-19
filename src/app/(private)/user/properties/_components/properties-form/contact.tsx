import React from "react";
import { PropertiesFormStepProps } from ".";
import { Button, Form, Input, Select, message } from "antd";
import { UploadFilesToFirebaseAndReturnUrls } from "@/helpers/upload-media";
import { AddProperty, EditProperty } from "@/actions/properties";
import { useRouter, useParams } from "next/navigation";

function Contact({
  currentStep,
  setCurrentStep,
  finalValues,
  setFinalValues,
  loading,
  setLoading,
  isEdit = false,
}: PropertiesFormStepProps) {
  const { id }: any = useParams();
  const router = useRouter();
  const onFinish = async (values: any) => {
    try {
      setLoading(true);
      const tempFinalValues = { ...finalValues, contact: values };

      // handle media upload
      const tempMedia = tempFinalValues.media;
      const newImagesURLS = await UploadFilesToFirebaseAndReturnUrls(
        tempMedia.newlyUploadedFiles
      );

      tempMedia.images = [...tempMedia.images, ...newImagesURLS];

      tempFinalValues.media = tempMedia;
      const valuesAsPerDb = {
        ...tempFinalValues.basic,
        ...tempFinalValues.location,
        ...tempFinalValues.amenities,
        ...tempFinalValues.contact,
        images: tempFinalValues.media.images,
      };
      let response = null;
      if (isEdit) {
        response = await EditProperty(valuesAsPerDb, id);
      } else {
        response = await AddProperty(valuesAsPerDb);
      }
      if (response.error) throw new Error(response.error);
      message.success(response.message);
      router.push("/user/properties");
    } catch (error: any) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  // ownerName , ownerEmail , ownerPhone , ownerAddress , showOwnerContact
  return (
    <Form
      onFinish={onFinish}
      layout="vertical"
      initialValues={finalValues.contact}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <Form.Item
          name="ownerName"
          label="Owner Name"
          rules={[
            {
              required: true,
              message: "Please input owner name!",
            },
          ]}
        >
          <Input placeholder="Owner Name" />
        </Form.Item>
        <Form.Item
          name="ownerEmail"
          label="Owner Email"
          rules={[
            {
              required: true,
              message: "Please input owner email!",
            },
          ]}
        >
          <Input placeholder="Owner Email" />
        </Form.Item>
        <Form.Item
          name="ownerPhone"
          label="Owner Phone"
          rules={[
            {
              required: true,
              message: "Please input owner phone!",
            },
          ]}
        >
          <Input placeholder="Owner Phone" />
        </Form.Item>

        <Form.Item
          name="showOwnerContact"
          label="Show Owner Contact"
          rules={[
            {
              required: true,
              message: "Please input show owner contact!",
            },
          ]}
        >
          <Select
            options={[
              { label: "Yes", value: true },
              { label: "No", value: false },
            ]}
          />
        </Form.Item>
      </div>
      <div className="flex justify-end gap-5 mt-7">
        <Button
          onClick={() => setCurrentStep(currentStep - 1)}
        >
          Back
        </Button>
        <Button type="primary" htmlType="submit" loading={loading}>
          Save Property
        </Button>
      </div>
    </Form>
  );
}

export default Contact;
