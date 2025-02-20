import { List, ListItem, ListItemText, IconButton, Typography, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteFinance } from "../services/api";
import propTypes from "prop-types";

const FinanceList = ({ finances, onFinanceDeleted }) => {
  const handleDelete = async (id) => {
    await deleteFinance(id);
    onFinanceDeleted();
  };

  return (
    <Box  sx={{ width: "100%" }}>
      <Typography variant="h6" gutterBottom>
        Registros Financeiros
      </Typography>
      <List>
        {finances.map((finance) => (
          <ListItem key={finance._id} secondaryAction={
            <IconButton edge="end" color="error" onClick={() => handleDelete(finance._id)}>
              <DeleteIcon />
            </IconButton>
          }>
            <ListItemText
              primary={
                <Typography variant="subtitle1" component="div" sx={{ color: finance.type === "income" ? "green" : "red", fontWeight: "bold" }}>
                {finance.description} - R${finance.amount.toFixed(2)}
              </Typography>
              }
              secondary={`Categoria: ${finance.category} | Data: ${new Date(finance.date).toLocaleDateString()}`.toLocaleUpperCase()}
            
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default FinanceList;

FinanceList.propTypes = {
  finances: propTypes.array.isRequired,
  onFinanceDeleted: propTypes.func.isRequired,
};
