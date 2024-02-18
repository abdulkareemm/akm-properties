import React from 'react'
import { PropertiesFormStepProps } from '.';
import { Button } from 'antd';

export default function Basic({currentStep,setCurrentStep}: PropertiesFormStepProps) {
  return (
    <div>
      <span>Basic</span>
      <div className="flex justify-end gap-5">
        <Button type="primary" onClick={() => setCurrentStep(currentStep - 1) } disabled={currentStep===0}>
          Back
        </Button>
        <Button type="primary" onClick={() => setCurrentStep(currentStep + 1)}>
          Next
        </Button>
      </div>
    </div>
  );
}
