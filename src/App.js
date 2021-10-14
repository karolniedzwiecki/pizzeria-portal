import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import { Switch } from 'react-router';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Home from './components/views/Home/Home';
import Login from './components/views/Login/Login';

import Tables from './components/views/Tables/Tables';
import Booking from './components/views/Booking/Booking';
import SingleBooking from './components/views/SingleBooking/SingleBooking';
import NewBooking from './components/views/NewBooking/NewBooking';
import Events from './components/views/Events/Events';
import SingleEvent from './components/views/SingleEvent/SingleEvent';
import NewEvent from './components/views/NewEvent/NewEvent';

import Ordering from './components/views/Ordering/Ordering';
import NewOrder from './components/views/NewOrder/NewOrder';
import Order from './components/views/Order/Order';
import Kitchen from './components/views/Kitchen/Kitchen';

import { StylesProvider } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#336699',
    },
    // secondary: {
    //   main: '#11cb5f',
    // },
  },
});

function App() {
  return (
<BrowserRouter basename={'/panel'}>
  <StylesProvider injectFirst>
    <ThemeProvider theme={theme}>
      <MainLayout>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
          <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
          <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/booking'} component={Booking} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={SingleBooking} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/booking/new'} component={NewBooking} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/events'} component={Events} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/events/:id'} component={SingleEvent} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/events/new'} component={NewEvent} />

          <Route exact path={process.env.PUBLIC_URL + '/ordering'} component={Ordering} />
          <Route exact path={process.env.PUBLIC_URL + '/ordering/order/:id'} component={Order} />
          <Route exact path={process.env.PUBLIC_URL + '/ordering/order/New'} component={NewOrder} />

          <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
        </Switch>
      </MainLayout>
    </ThemeProvider>
  </StylesProvider>
</BrowserRouter>
  );
}

export default App;
