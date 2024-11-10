import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Home from "./Pages/Home";
import DetailsFilling from "./Pages/DetailsFilling";
import CheckSelectedId from "./Components/CheckSelectedId";
import AboutUs from "./Pages/AboutUs";
import MyResumes from "./Pages/MyResumes";
import Homeone from "./Pages/Homeone";
import FooterComponent from "./Components/FooterComponent";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import ContactPage from "./Pages/Contact";
import Category from "./Pages/Categories";
import Sports from "./Pages/Sports";
import Business from "./Pages/Business";
import Freelancer from "./Pages/Freelancer";
import Tester from "./Pages/test";
import ContentCreator from "./Pages/Protfolio/Education/ContentCreator";
import Football from "./Pages/Protfolio/Sports/Football";
import Cricket from "./Pages/Protfolio/Sports/Cricket";
import Food from "./Pages/Protfolio/Business/Food";
import Carwash from "./Pages/Protfolio/Business/Carwash";
import Portfolio from "./Pages/Portfolio";
import Computerscience from "./Pages/Protfolio/Education/Computerscience";
import Pharmacist from "./Pages/Protfolio/Education/Pharmacist";
import { PortfolioTemplates } from "./PortfolioUtils/Data/Portfolio";
import ProtfolioNavbar from "./Components/ProtfolioNavbar";
import Authabout from "./Pages/AuthAbout";
import AuthContact from "./Pages/AuthContact";
import Sidebar from "./Admin/Sidebar";
import Main from "./Admin/Main";
import CustomizeContent from "./Admin/CustomizeContent";
import PharmaTwo from "./Pages/Protfolio/Education/PharmaTwo";
import CS from "./Pages/Protfolio/Education/CS";
import Foodie from "./Pages/Protfolio/Business/Foodie";
import Carwasher from "./Pages/Protfolio/Business/Carwasher";
import CricketTwo from "./Pages/Protfolio/Sports/CricketTwo";
import FootballTwo from "./Pages/Protfolio/Sports/FootballTwo";
import SubCategories from "./Pages/SubCategories";
import PharmaTemplates from "./Pages/PharmaTemplates";
import CsTemplates from "./Pages/CsTemplates";
import FoodTemplates from "./Pages/FoodTemplates";
import CarwashTemplates from "./Pages/CarwashTemplates";
import CricketTemplates from "./Pages/CricketTemplates";
import FootballTemplates from "./Pages/FootballTemplates";
import SpecialTemp from "./Pages/Protfolio/Sports/SpecialTemp";
import CustomiseCategories from './Admin/CustomiseCategories';  
import SubCategory from "./Admin/customizesub-category";
import TemplateSelection from "./Admin/Templateselection";
import TemplateDisplay from "./Components/TemplateDisplay";


const App = () => {
  const RedirectOnLoad = () => {
    const navigate = useNavigate();
    useEffect(() => {
      const currentPathname = window.location.pathname;
      const currentSearch = window.location.search;
      const portfolio = JSON.parse(localStorage.getItem('myPortfolio'));
      if (
        currentPathname === "/Portfolio" &&
        currentSearch === `?${portfolio[0].personalInfo.firstName} ${portfolio[0].personalInfo.lastName}-portfolio&id=${portfolio[0].template_id}`
      ) {
        // Redirect to the desired route
        navigate("/Portfolio");
      }
    }, [navigate]);
  
    return null;
  };

  return (
    <Router>
      <RedirectOnLoad />
      <Routes>
        {/* Home Page Route */}
        <Route exact path="/" element={<Homeone />} />

        {/* Details Filling Page */}
        <Route
          exact
          path="/template/fill-details"
          element={
            <CheckSelectedId>
              <DetailsFilling />
            </CheckSelectedId>
          }
        />
        

        {/* My Resumes Page */}
        <Route exact path="/profile" element={<MyResumes />} />
        <Route exact path="/template" element={<Home />} />
        <Route exact path="/subcategories" element={<SubCategories />} />

        {/* About Us Page */}
        <Route exact path="/about-us" element={<AboutUs />} />
        <Route exact path="/authabout-us" element={<Authabout />} />
        <Route exact path="/contact" element={<ContactPage />} />
        <Route exact path="/authcontact" element={<AuthContact />} />

        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/category" element={<Category />} />
        <Route exact path="/sports" element={<Sports />} />
        <Route exact path="/business" element={<Business />} />
        <Route exact path="/freelance" element={<Freelancer />} />
        <Route exact path="/test" element={<Tester />} />
        <Route exact path="/pharmacist" element={<Pharmacist />} />
        <Route exact path="/computer" element={<Computerscience />} />
        <Route exact path="/content" element={<ContentCreator />} />
        <Route exact path="/football" element={<Football />} />
        <Route exact path="/cricket" element={<Cricket />} />
        <Route exact path="/food" element={<Food />} />
        <Route exact path="/carwash" element={<Carwash />} />
        <Route exact path="/Portfolio" element={<Portfolio />} />
        <Route exact path="/nav" element={<ProtfolioNavbar />} />
        <Route exact path="/sidebar" element={<Sidebar />} />
        <Route exact path="/mainpage" element={<Main />} />
        <Route exact path="/customize" element={<CustomizeContent />} />
        <Route exact path="/pharma" element={<PharmaTwo />} />
        <Route exact path="/cs" element={<CS />} />
        <Route exact path="/foodie" element={<Foodie />} />
        <Route exact path="/car" element={<Carwasher />} />
        <Route exact path="/cricket2" element={<CricketTwo />} />
        <Route exact path="/specialTemp" element={<SpecialTemp />} />
        <Route exact path="/football2" element={<FootballTwo />} />
        <Route exact path="/pharmaTemplate" element={<PharmaTemplates />} />
        <Route exact path="/csTemplate" element={<CsTemplates />} />
        <Route exact path="/foodTemplate" element={<FoodTemplates />} />
        <Route exact path="/carTemplate" element={<CarwashTemplates />} />
        <Route exact path="/cricketTemplate" element={<CricketTemplates />} />
        <Route exact path="/footballTemplate" element={<FootballTemplates />} />
        <Route exact path="/customise-categories" element={<CustomiseCategories />} />
        <Route exact path="/sub-category" element={<SubCategory />} />
        <Route exact path="/TemplateSelection" element={<TemplateSelection />} />
        <Route exact path="/TemplateDisplay" element={<TemplateDisplay />} />
       
        
      </Routes>
    </Router>
  );
};

export default App;
