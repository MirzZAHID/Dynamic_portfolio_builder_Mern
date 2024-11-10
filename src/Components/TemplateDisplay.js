import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Button, Stack } from '@mui/material';
import { connect } from 'react-redux';
import { selectTemplate } from '../Redux/Actions/actions';
import UserLayout from '../Layouts/UserLayout';
import { PortfolioTemplates } from '../PortfolioUtils/Data/Portfolio';

const mapStateToProps = (state) => ({
  selectedTemplateId: state.selectedTemplateReducer.selectedTemplateId,
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedTemplateId: (id) => dispatch(selectTemplate(id)),
});

const TemplateDisplay = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedTemplates = [] } = location.state || {};

  const navigateToFillDetails = (templateName) => {
    const selectedTemplate = PortfolioTemplates.find(
      (template) => template.template_name === templateName
    );

    // Select the template and navigate to fill-details
    props.setSelectedTemplateId(selectedTemplate.id);
    navigate('/template/fill-details');
  };

  return (
    <UserLayout>
      <div className="home">
        <div className="home-templates-cont">
          <h2 className="template-header-title">Selected Templates</h2>
          <p className="template-select-text">Click on a template to proceed</p>

          <Stack
            sx={{
              width: '100%',
              display: 'grid',
              gridTemplateColumns: {
                sm: '1fr 1fr',
                md: '1fr 1fr',
                lg: '1fr 1fr 1fr',
                xl: '1fr 1fr 1fr 1fr',
              },
              gridGap: '30px',
            }}
          >
            {selectedTemplates.map((templateName) => {
              const template = PortfolioTemplates.find(
                (template) => template.template_name === templateName
              );
              return (
                <Box key={template.id} id="template" className="templates-img-cont">
                  <img
                    style={{ width: '75%' }}
                    className="template-img"
                    src={template.template_img}
                    alt={template.template_name}
                  />
                  <Button
                    className="use-template-btn"
                    onClick={() => {
                      navigateToFillDetails(template.template_name);
                      localStorage.setItem('selectedTemplate', JSON.stringify(template)); // Store selected template in localStorage if needed
                    }}
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
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TemplateDisplay);
