
export interface Ship {
    id: string;
    name: string;
    country: string;
    maxTEU: string;
  }

export interface ShipResponse {
    ships: Ship[];
  }