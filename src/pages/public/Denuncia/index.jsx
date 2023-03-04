import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import CustomSection from "components/CustomSection";

import form_styles from "components/SpecificStyles/form.module.css";

const Complaint = () => {
  return (
    <CustomSection
      style={{
        overflow: "hidden",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Faça uma denúncia
        </Typography>

        <Typography
          variant="p"
          sx={{
            fontSize: "1.1rem",
            textAlign: "center",
            margin: "0 auto",
            fontWeight: "normal",
            maxWidth: "30rem",
          }}
        >
          Sentimos muito pelo ocorrido.
        </Typography>

        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginTop: "2rem",
            width: "100%",
            maxWidth: "36rem",
          }}
          className={form_styles.customFormStyle}
        >
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="E-mail" />
          <textarea placeholder="Mensagem" />

          <input type="submit" />
        </form>

        <Typography
          variant="p"
          sx={{
            fontSize: "1.1rem",
            textAlign: "center",
            margin: "0 auto",
            fontWeight: "normal",
            maxWidth: "40",
            marginTop: "2rem",
          }}
        >
          Não se preocupe! Seus dados não serão compartilhados com terceiros.
        </Typography>
        <Typography
          variant="p"
          sx={{
            fontSize: "1.1rem",
            textAlign: "center",
            margin: "0 auto",
            fontWeight: "normal",
            maxWidth: "40",
          }}
        >
          Sua denúncia será analisada e tomaremos as medidas cabíveis.
        </Typography>
      </Container>
    </CustomSection>
  );
};

export default Complaint;
