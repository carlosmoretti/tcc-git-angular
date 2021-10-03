import { Injectable } from "@angular/core";

@Injectable()
export class SharedService {
  criarMatricula() {
    const data = new Date();
    let retorno = data.getFullYear() + data.toLocaleTimeString() + data.getMilliseconds();
    retorno = retorno.split(':').join('');
    return retorno;
  }
}
