import { useState } from "react";
import {
    Container,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
  } from "@material-ui/core";
import ExpandMore from "@material-ui/icons/ExpandMore";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';




const TurnoActual = () => {

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    return (
        <Container
            maxWidth="lg"
            style={{
                marginTop: "12rem",
                borderRadius: 10,
            }}
        >
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography variant="subtitle2" style={{ width: '33%', flexShrink: 0 }}>
                        Encargado Estación
                    </Typography>
                    <Typography variant="inherit" style={{ color: "text.secondary" }}>Damian Dominguez</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="subtitle2" style={{ width: '33%', flexShrink: 0 }}>
                        Hora Apertura de Turno: 07:45
                    </Typography>
                    <Typography variant="subtitle2" style={{ width: '33%', color: "text.secondary" }}>Turno Actual: 08:00 - 13:00 TM</Typography>
                    <Typography variant="inherit" style={{ color: "text.secondary" }}>Sector: Oficina</Typography>
                    <FiberManualRecordIcon fontSize="small" style={{marginLeft: "4rem", color: '#4caf50' }}/> 
                    <Typography variant="inherit" style={{color: "text.secondary" }}>Estado: Conectado </Typography>
                    

                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography variant="subtitle2" style={{ width: '33%', flexShrink: 0 }}>
                        Encargado Playa
                    </Typography>
                    <Typography variant="inherit" style={{ color: "text.secondary" }}>Victor Gonzalez</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="subtitle2" style={{ width: '33%', flexShrink: 0 }}>
                        Hora Apertura de Turno: 05:50
                    </Typography>
                    <Typography variant="subtitle2" style={{ width: '33%', color: "text.secondary" }}>Turno Actual: 06:00 - 14:00 TM</Typography>
                    <Typography variant="inherit" style={{ color: "text.secondary" }}>Sector: Playa</Typography>

                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography variant="subtitle2" style={{ width: '33%', flexShrink: 0 }}>
                        Auxiliar de Playa
                    </Typography>
                    <Typography variant="inherit" style={{ color: "text.secondary" }}>Osvaldo Zalazar</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="subtitle2" style={{ width: '33%', flexShrink: 0 }}>
                        Hora Apertura de Turno: 07:50
                    </Typography>
                    <Typography variant="subtitle2" style={{ width: '33%', color: "text.secondary" }}>Turno Actual: 08:00 - 12:00 TM</Typography>
                    <Typography variant="inherit" style={{ color: "text.secondary" }}>Sector: Playa</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography variant="subtitle2" style={{ width: '33%', flexShrink: 0 }}>
                        Seguridad
                    </Typography>
                    <Typography variant="inherit" style={{ color: "text.secondary" }}>Chamorro Jesus</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="subtitle2" style={{ width: '33%', flexShrink: 0 }}>
                        Hora Apertura de Turno: 05:50
                    </Typography>
                    <Typography variant="subtitle2" style={{ width: '33%', color: "text.secondary" }}>Turno Actual: 06:00 - 14:00 TM</Typography>
                    <Typography variant="inherit" style={{ color: "text.secondary" }}>Sector: Vigilancia</Typography>

                </AccordionDetails>
            </Accordion>
        </Container>
    );
};

export default TurnoActual;