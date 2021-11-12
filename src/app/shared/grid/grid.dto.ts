export class GridDto {

  constructor(colunas: Array<string>, inclusaoUrl: string, alteracaoUrl: string, paginateConfig: any, valores: Array<Array<any>>) {
    this.colunas = colunas;
    this.inclusaoUrl = inclusaoUrl;
    this.alteracaoUrl = alteracaoUrl;
    this.paginateConfig = paginateConfig;
    this.valores = valores;
  }

  colunas: Array<string> = [];
  valores: Array<Array<any>> = [];
  inclusaoUrl!: string;
  alteracaoUrl!: string;
  paginateConfig: any;
}
