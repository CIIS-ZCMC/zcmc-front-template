import React, { createContext, useContext, useReducer, useCallback } from 'react';
import type { Toast } from '../types/toast.types';
import type { ToastContextType } from '../types/toast.types';

// Toast Reducer
type ToastAction = 
  | { type: 'ADD_TOAST'; payload: Toast }
  | { type: 'REMOVE_TOAST'; payload: string }
  | { type: 'CLEAR_TOASTS' };

interface ToastState {
  toasts: Toast[];
}

const toastReducer = (state: ToastState, action: ToastAction): ToastState => {
  switch (action.type) {
    case 'ADD_TOAST':
      return {
        ...state,
        toasts: [...state.toasts, action.payload]
      };
    case 'REMOVE_TOAST':
      return {
        ...state,
        toasts: state.toasts.filter(toast => toast.id !== action.payload)
      };
    case 'CLEAR_TOASTS':
      return {
        ...state,
        toasts: []
      };
    default:
      return state;
  }
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

// Toast Provider Component
interface ToastProviderProps {
  children: React.ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(toastReducer, { toasts: [] });

  const addToast = useCallback((toast: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast: Toast = {
      ...toast,
      id,
      duration: toast.duration || 5000
    };

    dispatch({ type: 'ADD_TOAST', payload: newToast });

    // Auto remove toast after duration
    const actualDuration = newToast.duration || 5000;
    if (actualDuration > 0) {
      setTimeout(() => {
        dispatch({ type: 'REMOVE_TOAST', payload: id });
      }, actualDuration);
    }
  }, []);

  const removeToast = useCallback((id: string) => {
    dispatch({ type: 'REMOVE_TOAST', payload: id });
  }, []);

  const clearToasts = useCallback(() => {
    dispatch({ type: 'CLEAR_TOASTS' });
  }, []);

  return (
    <ToastContext.Provider 
      value={{ 
        toasts: state.toasts, 
        addToast, 
        removeToast, 
        clearToasts 
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};

// Custom hook to use Toast Context
export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};