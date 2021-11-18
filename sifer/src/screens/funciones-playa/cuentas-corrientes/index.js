import { React} from "react";
import {
  Grid,
  Container,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import Paper from '@mui/material/Paper';




const CuentasCorrientes= () => {
    const TAX_RATE = 0.07;

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty - unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow('Larrosa Ricardo', 10000, 9000),
  createRow('Cuenta a SIFER', 3560, 500),
  createRow('Izurieta Juan', 3545, 650),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;
  
  return (
    <Container
      maxWidth="lg"
      style={{
        marginTop: "7rem",
        borderRadius: 10,
      }}
    >
      <Grid
        container
        xl={12}
        lg={12}
        md={12}
        sm={12}
        xs={12}
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{
          backgroundColor: "#417351",
          width: "100%",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          boxShadow: "0px 5px 5px rgba(0, 0, 0, .2)",
        }}
      >
        <Typography
          variant="h5"
          style={{
            marginTop: "1rem",
            height: "3rem",
            color: "white",
            textAlign: "center",
          }}
        >
          Cuentas Corrientes
        </Typography>

      <Grid
        container
        direction="column"
        alignItems="flex-end"
        style={{
          backgroundColor: "#ffffff",
          padding: "1rem",
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          boxShadow: "0px 5px 5px rgba(0, 0, 0, .2)",
        }}
      >
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={3}>
              Detalle
            </TableCell>
            <TableCell align="right">Montos por Cargas</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Cliente</TableCell>
            <TableCell align="right">Saldo Actual</TableCell>
            <TableCell align="right">Saldo Anterior</TableCell>
            <TableCell align="right">Importe Cargado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.desc}>
              <TableCell>{row.desc}</TableCell>
              <TableCell align="right">{row.qty}</TableCell>
              <TableCell align="right">{row.unit}</TableCell>
              <TableCell align="right">{ccyFormat(row.price)}</TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Subtotal Ctas Ctes Clientes</TableCell>
            <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Cuenta SIFER</TableCell>
            {/* <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell> */}
            <TableCell align="right">2 Cargas</TableCell>

            <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
        
        
        </Grid>
      </Grid>
    </Container>
  );
};
export default CuentasCorrientes;