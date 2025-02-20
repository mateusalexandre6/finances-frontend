import { useEffect, useState } from "react";
import { Container, Typography, Paper } from "@mui/material";
import FinanceForm from "../components/FinanceForm";
import FinanceList from "../components/FinanceList";
import { getFinances } from "../services/api";

const Home = () => {
  const [finances, setFinances] = useState([]);

  const fetchFinances = async () => {
    const data = await getFinances();
    setFinances(data);
  };

  useEffect(() => {
    fetchFinances();
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" color="primary" gutterBottom>
        Controle de Finanças
      </Typography>
      <Paper sx={{ p: 3, mb: 3, backgroundColor: "background.paper" }}>
        <FinanceForm onFinanceAdded={fetchFinances} />
      </Paper>
      <Paper sx={{ p: 3, mb:3, backgroundColor: "background.paper" }}>
        <FinanceList finances={finances} onFinanceDeleted={fetchFinances} />
      </Paper>
    </Container>
  );
};

export default Home;
