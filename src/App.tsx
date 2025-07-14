import { ToastProvider } from './contexts/ToastContext';
import ToastContainer from './components/ui/ToastContainer';

// Router
import { RouterProvider } from 'react-router-dom';
import appRoute from './routes/appRoute';
import { SidebarProvider } from './contexts/SidebarContext';

function App() {
  return (
    <SidebarProvider>
      <ToastProvider>
        <div className="App">
          {/* <ExampleComponent /> */}
          <RouterProvider router={appRoute} />
          <ToastContainer />
        </div>
      </ToastProvider>
    </SidebarProvider>
  )
}

export default App
