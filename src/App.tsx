import { ToastProvider } from './contexts/ToastContext';
import ToastContainer from './components/ui/ToastContainer';

// Router
import { RouterProvider } from 'react-router-dom';
import appRoute from './routes/appRoute';

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
