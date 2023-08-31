import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { useSelector } from 'react-redux';
import ShipList from '../ship/ShipList';

jest.mock('react-redux'); 

describe('ShipList component', () => {
  const mockShips = [
    {
      id: '1',
      name: 'Ship 1',
      owner: 'Owner 1',
      built: 2020,
      maxTEU: '1000',
      lengthMeters: 300,
      beamMeters: 40,
    },

  ];

  it('renders ShipCard components with ships data', async () => {
   
    const mockUseSelector = useSelector as jest.MockedFunction<typeof useSelector>;
    mockUseSelector.mockReturnValue({ data: { ships: mockShips }, isLoading: false, isError: false });

    const { getByText } = render(<ShipList filteredShips={[]} />);

    await waitFor(() => {
      const shipNames = mockShips.map((ship) => ship.name);
      shipNames.forEach((name) => {
        const shipNameElement = getByText(name);
        expect(shipNameElement).toBeInTheDocument();
      });
    });
  });


});

