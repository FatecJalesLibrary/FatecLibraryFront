import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import CustomSection from "components/CustomSection";
import form_styles from "components/SpecificStyles/form.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Post } from "utilities/requests";

const LoginPage = () => {
  let navigate = useNavigate();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let form = new FormData();
    form.append("email", email);
    form.append("password", password);

    const res = await Post("auth/login", form);

    if (res?.status === true) {
      
      localStorage.setItem("token", res.access_token);
      localStorage.setItem("user", JSON.stringify(res.user));

      navigate('/dashboard');
      console.log('foi')
    } else {
      console.log(res.errors)
    }
  };

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
          Login
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
          Faça login para continuar.
        </Typography>

        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginTop: "2rem",
            width: "100%",
            maxWidth: "30rem",
          }}
          className={form_styles.customFormStyle}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

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
          Esqueceu a senha? <a href="#">Clique aqui</a>.
        </Typography>
      </Container>
    </CustomSection>
  );
};

export default LoginPage;
