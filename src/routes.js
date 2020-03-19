import HomePage from "./containers/HomePageContainer/HomePage";
import LoginPage from "./containers/LoginContainer/LoginPage";
import RegisterPage from "./containers/LoginContainer/RegisterPage";
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

export default [
  { path: "/", exact: true, component: HomePage },
  { path: "/home", exact: true, component: HomePage },
  { path: "/login", exact: true, component: LoginPage },
  { path: "/register", exact: true, component: RegisterPage },
  { path: "/contact", exact: true, component: ContactPage },
  { path: "/printticket", exact: true, component: PrintTicketPage },
  { path: "/cancelticket", exact: true, component: CancellationPage },
  { path: "/termsandconditions", exact: true, component: TandCPage },
  { path: "/refundpolicy", exact: true, component: RefundPolicyPage },
  { path: "/aboutus", exact: true, component: AboutUsPage },
  { path: "/searchresult", exact: true, component: SearchResult },
  { path: "/privacypolicy", exact: true, component: PrivacyPolicyPage },
  { path: "/seatselection", exact: true, component: SeatSelection },
  { path: "/booking", exact: true, component: Booking }
];
