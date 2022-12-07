import { ExpandMoreRounded } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Faq = () => {
  let theme = useTheme();
  let colors = tokens(theme.palette.mode);
  return (
    <Box sx={{ mt: "20px" }}>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "start" }}
      >
        <Header title="FAQ" subTitle="Frequently Asked Questions" />
      </Box>
      <Box display="flex" flexDirection="column" gap="10px">
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreRounded />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              An Important Question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              ipsum, sit esse vero eveniet illo repudiandae mollitia obcaecati,
              quibusdam culpa earum, nemo minima. Deleniti, perspiciatis
              mollitia atque quasi nostrum repellat ad voluptatibus totam illo
              cumque, assumenda nemo at tempora. Voluptatum repellendus quo quos
              ex eius, mollitia harum quisquam necessitatibus voluptas enim
              exercitationem? Consequuntur tempore fugiat voluptate, quasi natus
              corporis? Culpa nostrum asperiores, fuga corporis iure quos sunt
              labore! Eaque sunt vitae ipsa aspernatur saepe veritatis?
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreRounded />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              Another Important Question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              ipsum, sit esse vero eveniet illo repudiandae mollitia obcaecati,
              quibusdam culpa earum, nemo minima. Deleniti, perspiciatis
              mollitia atque quasi nostrum repellat ad voluptatibus totam illo
              cumque, assumenda nemo at tempora. Voluptatum repellendus quo quos
              ex eius, mollitia harum quisquam necessitatibus voluptas enim
              exercitationem? Consequuntur tempore fugiat voluptate, quasi natus
              corporis? Culpa nostrum asperiores, fuga corporis iure quos sunt
              labore! Eaque sunt vitae ipsa aspernatur saepe veritatis?
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreRounded />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              Your Favorite Question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              ipsum, sit esse vero eveniet illo repudiandae mollitia obcaecati,
              quibusdam culpa earum, nemo minima. Deleniti, perspiciatis
              mollitia atque quasi nostrum repellat ad voluptatibus totam illo
              cumque, assumenda nemo at tempora. Voluptatum repellendus quo quos
              ex eius, mollitia harum quisquam necessitatibus voluptas enim
              exercitationem? Consequuntur tempore fugiat voluptate, quasi natus
              corporis? Culpa nostrum asperiores, fuga corporis iure quos sunt
              labore! Eaque sunt vitae ipsa aspernatur saepe veritatis?
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreRounded />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              Random Important Question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              ipsum, sit esse vero eveniet illo repudiandae mollitia obcaecati,
              quibusdam culpa earum, nemo minima. Deleniti, perspiciatis
              mollitia atque quasi nostrum repellat ad voluptatibus totam illo
              cumque, assumenda nemo at tempora. Voluptatum repellendus quo quos
              ex eius, mollitia harum quisquam necessitatibus voluptas enim
              exercitationem? Consequuntur tempore fugiat voluptate, quasi natus
              corporis? Culpa nostrum asperiores, fuga corporis iure quos sunt
              labore! Eaque sunt vitae ipsa aspernatur saepe veritatis?
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreRounded />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              Final Important Question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              ipsum, sit esse vero eveniet illo repudiandae mollitia obcaecati,
              quibusdam culpa earum, nemo minima. Deleniti, perspiciatis
              mollitia atque quasi nostrum repellat ad voluptatibus totam illo
              cumque, assumenda nemo at tempora. Voluptatum repellendus quo quos
              ex eius, mollitia harum quisquam necessitatibus voluptas enim
              exercitationem? Consequuntur tempore fugiat voluptate, quasi natus
              corporis? Culpa nostrum asperiores, fuga corporis iure quos sunt
              labore! Eaque sunt vitae ipsa aspernatur saepe veritatis?
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default Faq;
