import { useEffect } from 'react';
import './Toast.css';

interface ToastProps {
  show: boolean;
  onClose: () => void;
  message: string;
}

export const Toast = ({ show, onClose, message }: ToastProps) => {

  useEffect(() => {
    if (show && message) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [show, message, onClose]);

  if (!show || !message) return null;

  return (
    <div className="toast" onClick={onClose}>
      <div className="toast__content">
        <p className="toast__message">{message}</p>
        <button className="toast__close" onClick={onClose}>×</button>
      </div>
    </div>
  );
};
