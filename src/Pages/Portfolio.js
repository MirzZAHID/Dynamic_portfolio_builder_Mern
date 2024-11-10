import React, { useEffect } from "react";
// import { templates } from "../Utils/Data/templates";
import { PortfolioTemplates } from "../PortfolioUtils/Data/Portfolio";
function Portfolio() {
  useEffect(() => {}, []);
  const getTemplate = (template, index) => {
    const portfolio = JSON.parse(localStorage.getItem("myPortfolio"));
    // console.log("template.id ",template.id )
    const searchParams = new URLSearchParams(window.location.search);

    // Get the value of the 'uid' parameter
    const id = searchParams.get("id");
    // if(template.id !== id){
    //     console.log("true");
    // }
    if (template.id == id) {
      // cloneElement lets you create a new React element using another element as a starting point.
      const TemplateComp = React.cloneElement(template.template, {
        personalinfo: portfolio[0].personalInfo,
        workexperience: portfolio[0].experiences,
        educationinfo: portfolio[0].educationInfo,
        skills: portfolio[0].skills,
        projects: portfolio[0].projects,
        index: index,
      });
      return TemplateComp;
    }
  };
  return (
    <div>
      <div className="resume-preview-grid-item" id="previewresume">
        {PortfolioTemplates.map((template, index) => {
          return getTemplate(template, index);
        })}
      </div>
    </div>
  );
}

export default Portfolio;
