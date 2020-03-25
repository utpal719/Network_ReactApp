import HomePage from "./containers/HomePageContainer/HomePage";
import LoginPage from "./containers/LoginContainer/LoginPage";
import RegisterPage from "./containers/LoginContainer/RegisterPage";
import TourismPage from "./containers/TourismPageContainer/TourismPage";
import ContactPage from "./containers/ContactPageContainer/ContactPage";
import PrintTicketPage from "./containers/PrintTicketContainer/PrintTicketPage";
import CancellationPage from "./containers/CancellationPageContainer/CancellationPage";
import TandCPage from "./containers/TandCPage/TandCPage";
import RefundPolicyPage from "./containers/RefundPolicypage/RefundPolicyPage";
import AboutUsPage from "./containers/AboutUsConatiner/AboutUsPage";
import SearchResult from "./containers/SearchResultContainer/SearchResult";
import PrivacyPolicyPage from "./containers/PrivacyPolicyPage/PrivacyPolicyPage";
import SeatSelection from "./containers/SeatSelection/SeatSelection";
import Booking from "./containers/Booking/Booking";
import ETicket from "./containers/ETicket/ETicket";
import MyTrips from "./containers/MyTrips/MyTrips";

export default [
  { path: "/", exact: true, component: HomePage, wrapPreloader: false },
  { path: "/home", exact: true, component: HomePage, wrapPreloader: false },
  {
    path: "/login",
    exact: true,
    component: LoginPage,
    wrapPreloader: true,
    defaultLoading: false
  },
  {
    path: "/register",
    exact: true,
    component: RegisterPage
  },
  {
    path: "/contact",
    exact: true,
    component: ContactPage,
    wrapPreloader: false
  },
  {
    path: "/printticket",
    exact: true,
    component: PrintTicketPage,
    wrapPreloader: false
  },
  {
    path: "/cancelticket",
    exact: true,
    component: CancellationPage,
    wrapPreloader: false
  },
  {
    path: "/tourism",
    exact: true,
    component: TourismPage,
    wrapPreloader: false
  },
  {
    path: "/termsandconditions",
    exact: true,
    component: TandCPage,
    wrapPreloader: false
  },
  {
    path: "/refundpolicy",
    exact: true,
    component: RefundPolicyPage,
    wrapPreloader: false
  },
  {
    path: "/aboutus",
    exact: true,
    component: AboutUsPage,
    wrapPreloader: false
  },
  {
    path: "/searchresult",
    exact: true,
    component: SearchResult,
    wrapPreloader: true
  },
  {
    path: "/privacypolicy",
    exact: true,
    component: PrivacyPolicyPage,
    wrapPreloader: false
  },
  {
    path: "/seatselection",
    exact: true,
    component: SeatSelection,
    wrapPreloader: false
  },
  { path: "/booking", exact: true, component: Booking, wrapPreloader: false },
  { path: "/e-ticket", exact: true, component: ETicket, wrapPreloader: true },
  { path: "/mytrips", exact: true, component: MyTrips, wrapPreloader: true }
];
