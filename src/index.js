import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import { StateProvider } from './config/StateProvider';
import { initialState } from './config/reducer'
import reducer from './config/reducer'
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import lightBlue from '@material-ui/core/colors/lightBlue'
import blue from '@material-ui/core/colors/blue'

const theme = createMuiTheme({
  palette : {
    primary: blue,
    secondary: lightBlue,
  }
  
})

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>  
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
