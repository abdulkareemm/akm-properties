import React from "react";
import { PropertiesFormStepProps } from ".";
import { Button, Upload } from "antd";

function Media({
  currentStep,
  setCurrentStep,
  finalValues,
  setFinalValues,
}: PropertiesFormStepProps) {
  const [tempFiles, setTempFiles] = React.useState<any[]>([]); // [
  const onFinish = () => {
    setFinalValues({
      ...finalValues,
      media: {
        newlyUploadedFiles: tempFiles,
        images: finalValues.media.images,
      },
    });
    setCurrentStep(currentStep + 1);
  };
  return (
    <div>
      <div className="flex flex-wrap gap-5 mb-5">
        {finalValues.media.images.map((image: string) => (
          <div className="flex flex-col gap-3 border border-dashed border-gray-400 p-2 rounded justify-center items-center">
            <img
              src={image}
              alt=""
              className="w-20 h-20 object-cover rounded"
            />
            <span
              className="text-red-500 underline text-sm cursor-pointer"
              onClick={() => {
                let tempMedia = finalValues.media;
                tempMedia.images = tempMedia.images.filter(
                  (img: string) => img !== image
                );
                setFinalValues({
                  ...finalValues,
                  media: {
                    newlyUploadedFiles: tempFiles,
                    images: tempMedia.images,
                  },
                });
              }}
            >
              Delete
            </span>
          </div>
        ))}
      </div>

      <Upload
        listType="picture-card"
        multiple
        beforeUpload={(file: any) => {
          setTempFiles((prev) => [...prev, file]);
          return false;
        }}
      >
        Upload
      </Upload>
      <div className="flex justify-end gap-5">
        <Button
          onClick={() => setCurrentStep(currentStep - 1)}
        >
          Back
        </Button>
        <Button type="primary" onClick={() => onFinish()}>
          Next
        </Button>
      </div>
    </div>
  );
}

export default Media;
