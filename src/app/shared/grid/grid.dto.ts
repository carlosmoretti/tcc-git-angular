export class GridDto {

  constructor(colunas: Array<string>, valores: Array<Array<any>>, inclusaoUrl: string, alteracaoUrl: string) {
    this.colunas = colunas;
    this.valores = valores;
    this.inclusaoUrl = inclusaoUrl;
    this.alteracaoUrl = alteracaoUrl;
  }

  colunas: Array<string> = [];
  valores: Array<Array<any>> = [];
  inclusaoUrl!: string;
  alteracaoUrl!: string;
}
