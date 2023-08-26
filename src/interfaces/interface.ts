
export interface Ship {
    id: string;
    name: string;
    country: string;
    maxTEU: string;
    lengthMeters: number,
    beamMeters: number,
    owner: string,
    built: number
  }

export interface ShipResponse {
    ships: Ship[];
  }