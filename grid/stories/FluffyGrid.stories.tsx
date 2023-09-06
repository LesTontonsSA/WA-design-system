import React from 'react';
import FluffyGrid from '../src/fluffyGrid'; // Adjust the import path as needed

const exampleData = [
  {
    _key: '1',
    type: 'item',
    textAlignment: 'left',
    className: 'custom-class-1',
  },
  {
    _key: '2',
    type: 'item',
    textAlignment: 'center',
    className: 'custom-class-2',
  },
  {
    _key: '3',
    type: 'item',
    textAlignment: 'right',
    className: 'custom-class-3',
  },
];

const ExampleApp = () => {
  return (
    <div>
      <FluffyGrid
        title="Example Grid"
        content={exampleData}
        align="center"
        justify="space-between"
        direction="row"
        spacing={2}
        marginBottom={true}
        marginTop={true}
      >
        {/* Children to be rendered within the grid items */}
        <div>Child 1</div>
        <div>Child 2</div>
        <div>Child 3</div>
      </FluffyGrid>
    </div>
  );
}

export default ExampleApp;
