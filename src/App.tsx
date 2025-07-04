import './App.css'
import { useToastHelpers } from './hooks/useToastHelpers';
import { ToastProvider } from './contexts/ToastContext';
import ToastContainer from './components/ui/ToastContainer';

// Router
import { RouterProvider } from 'react-router-dom';
import appRoute from './routes/appRoute';

const ExampleComponent: React.FC = () => {
  const { showSuccess, showError, showWarning, showInfo, showToastWithAction } = useToastHelpers();

  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold mb-6">Toast Examples</h1>
      
      <div className="space-y-2">
        <button
          onClick={() => showSuccess('Success!', 'Operation completed successfully.')}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-2"
        >
          Show Success
        </button>
        
        <button
          onClick={() => showError('Error!', 'Something went wrong.')}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mr-2"
        >
          Show Error
        </button>
        
        <button
          onClick={() => showWarning('Warning!', 'Please check your input.')}
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 mr-2"
        >
          Show Warning
        </button>
        
        <button
          onClick={() => showInfo('Info', 'Here is some information.')}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
        >
          Show Info
        </button>
        
        <button
          onClick={() => showToastWithAction(
            'info', 
            'Action Required', 
            'Click the action button to proceed.',
            'Take Action',
            () => alert('Action clicked!'),
            10000
          )}
          className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
        >
          Show Toast with Action
        </button>
      </div>
    </div>
  );
};

function App() {
  return (
    <ToastProvider>
      <div className="App">
        {/* <ExampleComponent /> */}
        <RouterProvider router={appRoute} />
        <ToastContainer />
      </div>
    </ToastProvider>
  )
}

export default App
