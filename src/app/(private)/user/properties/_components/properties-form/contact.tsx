import React from 'react'
import { PropertiesFormStepProps } from '.';
import { Button } from 'antd';

export default function Contact({currentStep,setCurrentStep}: PropertiesFormStepProps) {
  return (
    <div>
      <div className="flex justify-end gap-5">
        <Button type="primary" onClick={() => setCurrentStep(currentStep - 1)}>
          Back
        </Button>
        <Button
          type="primary"
          onClick={() => setCurrentStep(currentStep + 1)}
          disabled={currentStep === 4}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
