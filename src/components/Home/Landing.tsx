import { useNavigate } from "react-router-dom";
import { Container, IconGrid, IconCard } from "./Landing.styles";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <h1>Coming Soon</h1>
      <IconGrid>
        <IconCard onClick={() => navigate("/hirer")}>
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Hirer" />
          <p>Hirer</p>
        </IconCard>
        <IconCard onClick={() => navigate("/dev")}>
          <img src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png" alt="Dev" />
          <p>Dev</p>
        </IconCard>
        <IconCard onClick={() => navigate("/tryme")}>
          <img src="https://cdn-icons-png.flaticon.com/512/3659/3659759.png" alt="Try me" />
          <p>Try Me</p>
        </IconCard>
      </IconGrid>
    </Container>
  );
};

export default Landing;
