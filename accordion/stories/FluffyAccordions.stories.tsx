import * as React from 'react';
import { FluffyAccordion, type FluffyAccordionContentProps } from '~/accordion';

const accordionContentList: FluffyAccordionContentProps[] = [
  {
    title: 'Accordion #1',
    content: <div>Accordion #1 content</div>,
  },
  {
    title: 'Accordion #2',
    content: <div>Accordion #2 content</div>,
  },
  {
    title: 'Accordion #3',
    content: <div>Accordion #3 content</div>,
  },
];

export const FluffyAccordions = () => (
  <FluffyAccordion
    title="FluffyAccordion #1"
    accordionContentList={accordionContentList}
  />
);
