import styles from './app.module.css';
import { useRef, useState } from 'react';
import Form from './components/Form/Form';
import Diet from './components/Diet/Diet';
import Equipment from './components/Equipment/Equipment';
import Supplements from './components/Supplements/Supplements';
import Steps from './components/Steps/Steps';

function App() {
  const [step, setStep] = useState(1);
  const formRef = useRef();
  const nextStep = () => {
    if (step === 1) formRef.current.handleSubmit(); //use handleSubmit() from Form component, to send form
    setStep(step + 1)
  };
  const previousStep = () => setStep(step - 1);


  return (
    <div className={styles.app}>
      <div className={styles.displayLeft}>
        <div>Healthy Choice</div>
      </div>
      <div className={styles.displayRight}>
        <div className={styles.view}>
          {step === 1 && <Form ref={formRef} />}
          {step === 2 && <Diet />}
          {step === 3 && <Equipment />}
          {step === 4 && <Supplements />}
        </div>
        <Steps
          step={step}
          nextStep={nextStep}
          previousStep={previousStep}
        />
      </div>
    </div >
  );
}

export default App;