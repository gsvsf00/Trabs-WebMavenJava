import { IMovie } from "./IMovie";

export interface ISession {
  id: number;
  sessionIdentifier: string;
  numberOfSeats: 30;
  sessionStartDate: number;
  sessionEndDate: number;
  sessiosStatus: string;
  ticketPrice: number;
  event: IMovie;
}
