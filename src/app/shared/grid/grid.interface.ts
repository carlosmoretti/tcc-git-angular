import { GridDto } from './grid.dto';
export default interface IGrid {
  montarGrid(item: any) : GridDto;
}
