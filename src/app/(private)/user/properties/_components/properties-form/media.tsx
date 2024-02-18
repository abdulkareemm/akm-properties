import React from 'react'
import { PropertiesFormStepProps } from '.';
import { Button } from 'antd';

export default function Media({currentStep,setCurrentStep}: PropertiesFormStepProps) {
  return (
    <div>
      <span>Media</span>
      <div className="flex justify-end gap-5">
        <Button
          type="primary"
          onClick={() => setCurrentStep(currentStep - 1)}
        >
          Back
        </Button>
        <Button type="primary" onClick={() => setCurrentStep(currentStep + 1)}>
          Next
        </Button>
      </div>
    </div>
  );
}
