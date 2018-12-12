import {Position} from './position';

export class Company {
  name: string;
  positions: Position[];
  from: Date;
  to?: Date;
}
