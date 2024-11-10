// importing the  images of templates



import pharma from "../Images/pharma.PNG";
import pharma2 from "../Images/pharma2.PNG";
import computer from "../Images/computer.PNG";
import computertwo from "../Images/computertwo.PNG";
import food from "../Images/food.PNG";
import foodtwo from "../Images/foodtwo.PNG";
import carwash from "../Images/carwash.PNG";
import cartwo from "../Images/cartwo.PNG";
import football from "../Images/football.PNG";
import footballtwo from "../Images/footballtwo.PNG";
import cricketer from "../Images/cricketer.PNG";
import cricktwo from '../Images/cricktwo.PNG';


// importing all the templates 


import Computerscience from "../../Pages/Protfolio/Education/Computerscience";
import Pharmacist from "../../Pages/Protfolio/Education/Pharmacist";
import Food from "../../Pages/Protfolio/Business/Food";
import Carwash from "../../Pages/Protfolio/Business/Carwash";
import Football from "../../Pages/Protfolio/Sports/Football";
import Cricket from "../../Pages/Protfolio/Sports/Cricket";
import PharmaTwo from "../../Pages/Protfolio/Education/PharmaTwo";
import CS from "../../Pages/Protfolio/Education/CS";
import Carwasher from "../../Pages/Protfolio/Business/Carwasher";
import CricketTwo from "../../Pages/Protfolio/Sports/CricketTwo";
import FootballTwo from "../../Pages/Protfolio/Sports/FootballTwo";
import SpecialTemp from "../../Pages/Protfolio/Sports/SpecialTemp";
import Foodie from "../../Pages/Protfolio/Business/Foodie";


//templates are  exported to process further
export const PortfolioTemplates = [
  {
    id: 1,
    template_name: "Pharmacist 1",
    template_img: pharma,
    template: <Pharmacist/>,
  },
  {
    id: 2,
    template_name: "Pharmacist 2",
    template_img: pharma2,
    template: <PharmaTwo/>,
  },
  {
    id: 3,
    template_name: "Computer science 1",
    template_img: computer,
    template: <Computerscience/>,
  },
  {
    id: 4,
    template_name: "Computer science 2",
    template_img: computertwo,
    template:<CS/>,
  },
  {
    id: 5,
    template_name: "Food Business 1",
    template_img: food,
    template: <Food/>,
  },
  {
    id: 6,
    template_name: "Food Business 2",
    template_img: foodtwo,
    template: <Foodie/>,
  },
  {
    id: 7,
    template_name: "Car Wash Business 1",
    template_img: carwash,
    template: <Carwash/>,
  },
  {
    id: 8,
    template_name: "Car wash Business 2",
    template_img: cartwo,
    template: <Carwasher/>,
  },
  {
    id: 9,
    template_name: "FootBall 1",
    template_img: football,
    template: <Football/>,
  },
  {
    id: 10,
    template_name: "FootBall 2",
    template_img: footballtwo,
    template: <FootballTwo/>,
  },
  {
    id: 11,
    template_name: "Cricket 1",
    template_img: cricketer,
    template: <Cricket/>,
  },
  
  {
    id: 12,
    template_name: "Cricket 2",
    template_img: cricktwo,
    template: <CricketTwo/>,
  },
  {
    id: 13,
    template_name: "Cricket 3",
    template_img: cricktwo,
    template: <SpecialTemp/>,
  },
  
];
