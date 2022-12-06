export interface ISeat {
  ticketIdentifier: string;
  occupiedSeat: boolean;
  seat: number;
}

export interface ISelectedSeat {
  ticketIdentifier: string;
  nameUser?: string;
  sex?: string;
  doc?: string;
  price: number;
  seat: number;
  type: string;
}
