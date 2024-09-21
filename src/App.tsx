import './App.css';
import DefaultTheme from './config/theme/DefaultTheme';
import AppRoutes from './routes/AppRoutes';
import './index.css';

function App() {
  return (
    <DefaultTheme>
      <AppRoutes />
    </DefaultTheme>
  );
}

export default App;
