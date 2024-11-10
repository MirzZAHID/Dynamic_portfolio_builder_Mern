// import React, { useState } from "react";
// import {
//   Navbar,
//   DetailFillingSidebar,
//   EducationComponent,
//   KeySkillsComponent,
//   PersonalInfoComponent,
//   PreviewComponent,
//   WorkExperienceComponent,
// } from ".";
// import "./Styles/DetailsFilling.css";
// import {
//   Grid
// } from "@mui/material";
// import UserLayout from "../Layouts/UserLayout";

// // As soon as details are filled for particular categories/sections browser moves further to next fields if ! then same field on same page

// const DetailsFilling = (props) => {
//   const [tab, setTab] = useState(0);

//   return (
//     <UserLayout>
//     <div className="details-filling">
//       {tab === 4 ? null : (
         
//         <div className="details-filling-cont w-100">
//          <Grid container sx={{width:"100%"}}>  <Grid lg={ 4} xs={12} >
//           <DetailFillingSidebar tab={tab} setTab={setTab} /> </Grid>
//           <Grid lg={ 8} xs={12} >
//           {tab === 0 ? (
//             <PersonalInfoComponent setTab={setTab} tab={tab} />
//           ) : null}
//           {tab === 3 ? <KeySkillsComponent setTab={setTab} tab={tab} /> : null}
//           {tab === 1 ? (
//             <WorkExperienceComponent setTab={setTab} tab={tab} />
//           ) : null}
//           {tab === 2 ? <EducationComponent setTab={setTab} tab={tab} /> : null}</Grid></Grid>
//         </div>
//       )}
//       {tab === 4 ? <PreviewComponent setTab={setTab} tab={tab} /> : null}
//     </div>
//     </UserLayout>
//   );
// };

// export default DetailsFilling;
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  DetailFillingSidebar,
  EducationComponent,
  KeySkillsComponent,
  PersonalInfoComponent,
  PreviewComponent,
  WorkExperienceComponent,
} from ".";
import "./Styles/DetailsFilling.css";
import { Grid, Container } from "@mui/material";
import UserLayout from "../Layouts/UserLayout";

const DetailsFilling = () => {
  const [tab, setTab] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const { templateName } = location.state || {};

  useEffect(() => {
    if (!templateName) {
      const storedTemplate = localStorage.getItem('selectedTemplate');
      if (!storedTemplate) {
        navigate('/');
      }
    }
  }, [templateName, navigate]);

  return (
    <UserLayout>
      <div className="details-filling">
        {tab === 4 ? null : (
          <div className="details-filling-cont">
            <Container sx={{ mt: 4 }}>
              <Grid container>
                <Grid lg={3} xs={12} sx={{ px: 2 }}>
                  <DetailFillingSidebar tab={tab} setTab={setTab} />
                </Grid>
                <Grid lg={9} xs={12}>
                  {tab === 0 && <PersonalInfoComponent setTab={setTab} tab={tab} />}
                  {tab === 1 && <WorkExperienceComponent setTab={setTab} tab={tab} />}
                  {tab === 2 && <EducationComponent setTab={setTab} tab={tab} />}
                  {tab === 3 && <KeySkillsComponent setTab={setTab} tab={tab} />}
                </Grid>
              </Grid>
            </Container>
          </div>
        )}
        {tab === 4 && <PreviewComponent setTab={setTab} tab={tab} />}
      </div>
    </UserLayout>
  );
};

export default DetailsFilling;
