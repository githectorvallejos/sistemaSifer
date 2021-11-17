import { useState, useEffect } from "react";
import {
    Container,
    Grid,
    Box,
    Typography,
  } from "@material-ui/core";

// import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

  
import { LinearProgress } from '@mui/material';
import { height } from "@mui/system";

  
  // import Theme from "theme";
  // import { Delete } from "@material-ui/icons";
  
  const IngresoCamion = () => {
  
      const activo = [
          {
              nroCupon: 1001,
              tipoTarjeta: "VISA",
              montoPago: "$980",
              formaPago: "Debito",
              fechaPago: "16/11/2021"
          },
          {
              nroCupon: 1002,
              tipoTarjeta: "MASTERCARD",
              montoPago: "$1080",
              formaPago: "Debito",
              fechaPago: "17/11/2021"
          },
          {
              nroCupon: 1003,
              tipoTarjeta: "NARANJA",
              montoPago: "$3500",
              formaPago: "Debito",
              fechaPago: "17/11/2021"
          }
      ];
      console.log("la Data", activo);

      const [progress, setProgress] = useState(10);

  


      function LinearProgressWithLabel(props) {
        // useEffect(() => {
        //     const timer = setInterval(() => {
        //       setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
        //     }, 800);
        //     return () => {
        //       clearInterval(timer);
        //     };
        //   }, []);
        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
              <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
              <Typography variant="body2" color="text.secondary">{`${Math.round(
                props.value,
              )}%`}</Typography>
            </Box>
          </Box>
        );
      }

    // Funcion Tabla
    function createData(name, calories, fat, carbs, protein, price) {
        return {
          name,
          calories,
          fat,
          carbs,
          protein,
          price,
          history: [
            {
              date: 'Onda Gas',
              customerId: 'Bahia Blanca',
              amount: 904056,
            },
            {
              date: 'Don Antonio',
              customerId: 'Mendoza TGS',
              amount: 258796,
            },
            {
                date: 'SIFER GAS',
                customerId: 'Mendoza TGS',
                amount: 1006598,
              },
              {
                date: 'Expreso Cobra',
                customerId: 'Bahia Blanca',
                amount: 216548,
              },
          ],
        };
      }
      
      function Row(props) {
        const { row } = props;
        const [open, setOpen] = useState(false);
      
        return (
          <>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
              <TableCell>
                <IconButton
                  aria-label="expand row"
                  size="small"
                  onClick={() => setOpen(!open)}
                >
                  {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
              </TableCell>
              <TableCell align="center" component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.calories}</TableCell>
              <TableCell align="center">{row.fat}</TableCell>
              <TableCell align="center">{row.carbs}</TableCell>
              <TableCell align="center">{row.protein}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <Box sx={{ margin: 1 }}>
                    <Typography variant="h6" gutterBottom component="div">
                      Detalle
                    </Typography>
                    <Table size="small" aria-label="purchases">
                      <TableHead>
                        <TableRow>
                          <TableCell align="center">Transporte</TableCell>
                          <TableCell align="center">Origen Producto</TableCell>
                          <TableCell align="center">Precintos</TableCell>
                          <TableCell align="center">Nro Remito</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {row.history.map((historyRow) => (
                          <TableRow key={historyRow.date}>
                            <TableCell align="center" component="th" scope="row">
                              {historyRow.date}
                            </TableCell>
                            <TableCell align="center">{historyRow.customerId}</TableCell>
                            <TableCell align="center">{historyRow.amount}</TableCell>
                            <TableCell align="center">
                              {Math.round(historyRow.amount * row.price * 100) / 100}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Box>
                </Collapse>
              </TableCell>
            </TableRow>
          </>
        );
      }
      
      Row.propTypes = {
        row: PropTypes.shape({
          calories: PropTypes.number.isRequired,
          carbs: PropTypes.number.isRequired,
          fat: PropTypes.number.isRequired,
          history: PropTypes.arrayOf(
            PropTypes.shape({
              amount: PropTypes.number.isRequired,
              customerId: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
            }),
          ).isRequired,
          name: PropTypes.string.isRequired,
          price: PropTypes.number.isRequired,
          protein: PropTypes.number.isRequired,
        }).isRequired,
      };
      
      const rows = [
        createData('20-10-2021', 5607, 23056, 12300, 96, 13),
        createData('27-10-2021', 8607, 15607, 8100, 65, 13.5),
        createData('01-11-2021', 6156, 24500, 13150, 98, 14),
        createData('05-11-2021', 3215, 9650, 5200, 32, 17),
        createData('10-11-2021', 6400, 19650, 10023, 73, 16),
      ];
      
   
  
    return (
        <Container
        maxWidth="lg"
        style={{
          marginTop: "7rem",
          borderRadius: 10,
        }}
      >
        
          <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
            <Button>Save</Button>
        </Box>
       
  
        
  
                
      </Container>
    );
  };
  
  export default IngresoCamion;