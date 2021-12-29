import { Status } from "./Status";

export interface User {
  ID?: number,
  Name: string,
  Description?: string,
  StartDate: Date,
  EndDate?: Date,
  UserID: number,
  Status: Status
}
