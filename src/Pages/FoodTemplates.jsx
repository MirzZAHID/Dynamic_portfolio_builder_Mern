// src/Pages/Sports.js

import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Button, Stack } from "@mui/material";
import { Navbar, BlackScreen } from "."; // Make sure these imports are correct
import { templates } from "../Utils/Data/templates";
import { PortfolioTemplates } from "../PortfolioUtils/Data/Portfolio";
import { selectTemplate } from "../Redux/Actions/actions";
import UserLayout from "../Layouts/UserLayout";

const mapStateToProps = (state) => ({
  selectedTemplateId: state.selectedTemplateReducer.selectedTemplateId,
});
console.log(PortfolioTemplates);

const mapDispatchToProps = (dispatch) => ({
  setSelectedTemplateId: (id) => dispatch(selectTemplate(id)),
});

const FoodTemplates = (props) => {
  const navigate = useNavigate();

  const navigateToFillDetails = (id) => {
    props.setSelectedTemplateId(id);
    navigate("/template/fill-details");
  };

  return (
    <>
      {/* <Navbar active={"Resume Templates"} /> */}
      <UserLayout>


        <div className="home">
          <div className="home-templates-cont">
            <h2 className="template-header-title">Food Busniess Portfolio Templates</h2>
            <p className="template-select-text">
              Select a template to get started
            </p>

            <Stack
              sx={{
                width: "100%",
                display: "grid",
                gridTemplateColumns: {
                  sm: "1fr 1fr",
                  md: "1fr 1fr",
                  lg: "1fr 1fr 1fr",
                  xl: "1fr 1fr 1fr 1fr",
                },
                gridGap: "30px",
              }}
            >
              {PortfolioTemplates.slice(4, 6).map((template) => {
                return (
                  <Box
                    key={template.id}
                    id="template"
                    className="templates-img-cont"
                  >
                    <img
                      style={{ width: "75%" }}
                      className="template-img"
                      src={template.template_img}
                      alt={template.template_name}
                    />
                    <BlackScreen />
                    <Button
                      className="use-template-btn"
                      onClick={() => navigateToFillDetails(template.id)}
                      size="medium"
                      variant="contained"
                      color="secondary"
                    >
                      Use Template
                    </Button>
                    <h2>{template.template_name}</h2>
                  </Box>
                );
              })}
            </Stack>
          </div>
        </div>
      </UserLayout>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodTemplates);
