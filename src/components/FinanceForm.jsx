import { useState } from "react";
import { TextField, Button, MenuItem, Box, Grid2 } from "@mui/material";
import { createFinance } from "../services/api";
import propTypes from "prop-types";

const FinanceForm = ({ onFinanceAdded }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("alimentação"); // Mudei para categoria
  const [type, setType] = useState("income"); // Para tipo: entrada ou saída
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]); // Define a data atual como padrão

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!description || !amount || !date) return;

    const newFinance = { description, amount: parseFloat(amount), type, category, date }; // Agora usando 'category' também
    await createFinance(newFinance);
    onFinanceAdded();
    setDescription("");
    setAmount("");
    setDate(new Date().toISOString().split("T")[0]); // Reseta para a data atual
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{p: 2 }}>
      <Grid2 container spacing={2} columns={12}>
        <Grid2 item xs={6}>
          <TextField fullWidth label="Descrição" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </Grid2>
        <Grid2 item xs={6}>
          <TextField fullWidth label="Valor" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
        </Grid2>
        <Grid2 item xs={6}>
          <TextField
            fullWidth
            type="date"
            label="Data"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
            required
          />
        </Grid2>
        <Grid2 item xs={6}>
          <TextField fullWidth select label="Categoria" value={category} onChange={(e) => setCategory(e.target.value)} required>
            <MenuItem value="alimentação">Alimentação</MenuItem>
            <MenuItem value="transporte">Transporte</MenuItem>
            <MenuItem value="lazer">Lazer</MenuItem>
            <MenuItem value="moradia">Moradia</MenuItem>
            <MenuItem value="educação">Educação</MenuItem>
            <MenuItem value="saúde">Saúde</MenuItem>
            <MenuItem value="bebidas">Bebidas</MenuItem>
            <MenuItem value="outros">Outros</MenuItem>
          </TextField>
        </Grid2>
        <Grid2 item xs={6}>
          <TextField fullWidth select label="Tipo" value={type} onChange={(e) => setType(e.target.value)} required>
            <MenuItem value="income">Entrada</MenuItem>
            <MenuItem value="expense">Saída</MenuItem>
          </TextField>
        </Grid2>
        <Grid2 item xs={12}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Adicionar
          </Button>
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default FinanceForm;

FinanceForm.propTypes = {
  onFinanceAdded: propTypes.func.isRequired,
};
