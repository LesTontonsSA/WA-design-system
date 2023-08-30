import React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export interface FluffyAccordionContentProps {
  content: React.ReactNode;
  title: string;
}

export interface FluffyFluffyAccordionProps {
  accordionContentList: FluffyAccordionContentProps[];
  title: string;
  className?: string;
}

const FluffyAccordion: React.FC<FluffyFluffyAccordionProps> = ({
  accordionContentList,
  title,
  className,
}) => {
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = () => (event, isExpanded) => {
    setExpanded(isExpanded);
  };
  return (
    <Box className={className ?? ''}>
      {accordionContentList.map((accordion, i) => {
        const { content, title } = accordion;
        return (
          <Accordion
            key={i}
            className={`${expanded ? 'expanded' : ''} ${className ?? ''}`}
            onChange={handleChange}
            disableGutters
          >
            <AccordionSummary
              color="primary"
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panelbh-content-${i}`}
              id={`panelbh-header-${i}`}
            >
              <Typography>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>{content}</AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
};

export default FluffyAccordion;
