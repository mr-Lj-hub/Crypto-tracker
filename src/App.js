import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import CoinPage from './pages/CoinPage';
import {makeStyles} from "@material-ui/core";
import Alert from './components/Alert';

const useStyle =makeStyles(()=>({
  App: {
      backgroundColor:"#14161a",
      color:"white",
      minHeight:"100vh",
  },
}));

function App() {

 

    const classes =useStyle()
  return (
    <div className={classes.App}>
      <Router>
        <Header />
        
        <Routes>
        <Route path="/" element={<Homepage/>} exact/>
        <Route path="/coins/:id" element={<CoinPage/>}/>
       
        </Routes>
        
      </Router>
     <Alert/>
    </div>
   
   
  );
}

export default App;
