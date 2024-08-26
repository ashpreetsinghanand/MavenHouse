
import React from 'react'
import { hideToast } from "@redux/action";
// import {showToast} from "@redux/action"
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import NotFound from "@pages/NotFound/NotFound";
import Home from "@pages/Home/Home";
// import ProtectedRoutes from "./ProtectedRoutes";
// import UserRoutes from './UserRoutes';
import './index.css';
import { useToast } from "@chakra-ui/react";
import LoginWallet from './pages/Login/LoginWallet';

import Checkout from './pages/checkout/Checkout';
import CreateEvent from './pages/createevent/CreateEvent';
import Faq from './pages/faq/Faq';
import DashboardRoutes from '@pages/DashboardRoutes';
import About from '@pages/about/About';
import Footer from '@components/layout/Footer';
import Navbar from '@components/layout/Navbar';
import { useEffect } from 'react';
import GoLive from './pages/go-live/GoLive';
import ConnectWalletPopup from './components/popup/ConnectWalletPopup';
import { closeWalletModal } from './redux/action';
import CreatorNavbar from './components/layout/CreatorNavbar';
import Cookies from 'js-cookie';
import ArtistDetail from './pages/creaters-name/ArtistDetail';
import LiveStream from './pages/LiveStream/LiveStream';
import RecordStream from './pages/RecordStream/RecordStream';
import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from '@livepeer/react';
import { Web3ReactProvider } from "@web3-react/core";
import EventSummary from './pages/eventSummary';
// import eventSummary from './pages/eventSummary';
// import eventSummaryEmiway from './pages/eventSummaryEmiway';
// import eventSummaryDrake from './pages/eventSummaryDrake';
// import eventSummaryKendrick from './eventSummaryKendrick';
// import eventSummaryLil from './pages/eventSummaryLil';
// import EventSummary from './pages/EventSummary';


const client = createReactClient({
  provider: studioProvider({ apiKey: 'deacd5f8-0f20-41fa-ada9-c616be3b8323' }),
});

function getLibrary() {
  const web3 = new window.Web3(window.ethereum);
  return web3;
}

const livepeerTheme = {
  colors: {
    accent: 'rgb(0, 145, 255)',
    containerBorderColor: 'rgba(0, 145, 255, 0.9)',
  },
  fonts: {
    display: 'Inter',
  },
};

function CustomSnackBar({ type, message }) {
  const toast = useToast();
  return toast({
    title: message,
    status: type,
    duration: 2000,
    isClosable: true,
  })
}

export const AuthContext = React.createContext({});

const Routes = ({ }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { type, message, isVisible } = useSelector(
    (state) => state.toastReducer
  );
  let userType = Cookies.get('user-type');
  userType = userType ? JSON?.parse(userType) : userType
  const { isWalletOpen } = useSelector((state) => state.walletModalReducer);

  useEffect(() => {
    dispatch(hideToast());
    window.scrollTo(0, 0)
  }, [location.pathname])

  console.log(isVisible)

  return (
    <>
      {isVisible && <CustomSnackBar type={type} message={message} />}
      {location.pathname === '/go-live' || location.pathname === '/creator' || location.pathname === '/create-event' || userType?.type === 'creator' ? <CreatorNavbar /> : <Navbar />}
      <Web3ReactProvider getLibrary={getLibrary}>
        <LivepeerConfig client={client} theme={livepeerTheme}>
          <Switch>
            <Route path={'/home'} exact component={Home} />
            <Route path={'/'} exact component={LoginWallet} />
            {/* <Route path={'/magic-login'} exact component={MagicLogin} />
            <Route path={'/ticket'} exact component={Ticket} /> */}
            <Route path={'/checkout'} exact component={Checkout} />
            <Route path={'/create-event'} exact component={CreateEvent} />
            <Route path={'/faq'} exact component={Faq} />
            <Route path={'/go-live'} exact component={GoLive} />
            <Route path={'/artist-detail/:id'} exact component={ArtistDetail} />
            <Route path={'/artist-detail/:id/live'} exact component={LiveStream} />
            <Route path={'/artist-detail/:id/record'} exact component={RecordStream} />
            {/* <Route path={'/lil-nas-x'} exact component={Lil_Nas_X} />
            <Route path={'/drake'} exact component={Drake} />
            <Route path={'/doja-cat'} exact component={Doja_Cat} />
            <Route path={'/emiway'} exact component={Emiway} /> */}
            <Route path={'/about'} export component={About} />
            <Route path={'/creator'} export component={GoLive} />
            <Route path={"/dashboard"} render={(props) => <DashboardRoutes {...props} />} />
            {/* <Route path={"/eventSummary"} render={(props) => <eventSummary {...props} />}/> */}
            {/* <Route path={"/artist-detail/eventSummary/101"} exact component={eventSummary}/>
            <Route path={"/artist-detail/eventSummary/102"} exact component={eventSummaryEmiway}/>
            <Route path={"/artist-detail/eventSummary/100"} exact component={eventSummaryDrake}/>
            <Route path={"/artist-detail/eventSummary/98"} exact component={eventSummaryKendrick}/>
            <Route path={"/artist-detail/eventSummary/99"} exact component={eventSummaryLil}/> */}
            <Route path={'/artist-detail/eventSummary/:id'} exact component={EventSummary} />
          </Switch>
        </LivepeerConfig>
      </Web3ReactProvider>
      {(location.pathname === '/' || location.pathname === '/about' || location.pathname === '/faq' || location.pathname === '/create-event') && <Footer />}
      {isWalletOpen && (
        <ConnectWalletPopup
          isOpen={isWalletOpen}
          onClose={() => dispatch(closeWalletModal())}
        />
      )}
    </>

  );
}

const App = () => {
  const [user, setUser] = React.useState({})
  return (
    <Router>
      <AuthContext.Provider value={{ user, setUser }}>
        <Routes />
      </AuthContext.Provider>
    </Router>
  )

}
export default App;
