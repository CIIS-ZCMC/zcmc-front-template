import { useToast } from '../contexts/ToastContext';

export const useToastHelpers = () => {
  const { addToast } = useToast();

  const showSuccess = (title: string, message?: string, duration?: number) => {
    addToast({
      type: 'success',
      title,
      message,
      duration
    });
  };

  const showError = (title: string, message?: string, duration?: number) => {
    addToast({
      type: 'error',
      title,
      message,
      duration
    });
  };

  const showWarning = (title: string, message?: string, duration?: number) => {
    addToast({
      type: 'warning',
      title,
      message,
      duration
    });
  };

  const showInfo = (title: string, message?: string, duration?: number) => {
    addToast({
      type: 'info',
      title,
      message,
      duration
    });
  };

  const showToastWithAction = (
    type: 'success' | 'error' | 'warning' | 'info',
    title: string,
    message?: string,
    actionLabel?: string,
    actionCallback?: () => void,
    duration?: number
  ) => {
    addToast({
      type,
      title,
      message,
      duration,
      action: actionLabel && actionCallback ? {
        label: actionLabel,
        onClick: actionCallback
      } : undefined
    });
  };

  return {
    showSuccess,
    showError,
    showWarning,
    showInfo,
    showToastWithAction
  };
};