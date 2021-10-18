import { Injectable } from "@angular/core";

@Injectable()
export class SharedService {
  criarMatricula(suffix: string) {
    const data = new Date();
    let retorno = data.getFullYear() + data.toLocaleTimeString() + data.getMilliseconds() + suffix;
    retorno = retorno.split(':').join('');
    return retorno;
  }
}
