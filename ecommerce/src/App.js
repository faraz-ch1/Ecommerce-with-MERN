
import { Box } from '@mui/material';
import Header from './components/Header'
import Home from './components/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailView from './components/Details/DetailView';
import DataProvider from './context/DataProvider';
import Cart from './components/Cart/cart';


function App() {
  return (
    <DataProvider>
    <BrowserRouter>
    <Header />
    <Box style={{ marginTop: 54 }}>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product/:id' element={<DetailView />} />
      <Route path='/cart' element={<Cart />} />
      
    </Routes>
    </Box>
    </BrowserRouter>
    </DataProvider>
  );
}

export default App;
