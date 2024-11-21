import "./form.css";

import { useState } from "react";

import PoemStepOne from "../../components/PoemStepOne/PoemStepOne";
import PoemStepTwo from "../../components/PoemStepTwo/PoemStepTwo";
import PoemStepThree from "../../components/PoemStepThree/PoemStepThree";

export const Form = () => {
  const [step, setStep] = useState(1);

  const handleStep1Next = () => {
    setStep(2);
  };

  const handleStep2Next = () => {
    setStep(3);
  };

  const handleStep3Finish = () => {
    setStep(1);
  };

  return <>
    {step === 1 && <PoemStepOne onNext={handleStep1Next} />}
    {step === 2 && (
      <PoemStepTwo onNext={handleStep2Next} onBack={() => setStep(1)} />
    )}
    {step === 3 && (
      <PoemStepThree onFinish={handleStep3Finish} onBack={() => setStep(2)} />
    )}
  </>
};