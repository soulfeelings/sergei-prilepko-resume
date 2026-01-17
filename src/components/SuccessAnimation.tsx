import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import successAnimationData from '../assets/success.json';
import './SuccessAnimation.css';

interface SuccessAnimationProps {
  show: boolean;
  onComplete: () => void;
}

export const SuccessAnimation = ({ show, onComplete }: SuccessAnimationProps) => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (show) {
      setShouldRender(true);
      const timer = setTimeout(() => {
        setShouldRender(false);
        onComplete();
      }, 3500);
      return () => clearTimeout(timer);
    } else {
      setShouldRender(false);
    }
  }, [show, onComplete]);

  if (!shouldRender) return null;

  return (
    <div className="success-animation">
      <div className="success-animation__content">
        <Lottie 
          animationData={successAnimationData} 
          loop={false}
          className="success-animation__lottie"
        />
      </div>
    </div>
  );
};
