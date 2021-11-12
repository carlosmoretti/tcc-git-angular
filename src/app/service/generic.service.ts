import { HttpClient, HttpParams } from '@angular/common/http';

export default class GenericService<T> {
  constructor(public httpClient: HttpClient, public apiUrl: string) {
  }

  get() {
    return this.httpClient.get<T>(this.apiUrl);
  }

  post(obj: any) {
    return this.httpClient.post(this.apiUrl, obj);
  }

  put(obj: any) {
    return this.httpClient.put(this.apiUrl, obj);
  }

  getById(id: number) {
    return this.httpClient.get(this.apiUrl + '/' + id);
  }

  delete(id: number) {
    return this.httpClient.delete(this.apiUrl + '/' + id);
  }

  paginate(page: number, itensPerPage: number, keyword: string) {
    let params = new HttpParams();
    params = params.append('page', page.toString());
    params = params.append('itensPerPage', itensPerPage.toString());

    if(keyword != null)
      params = params.append('keyword', keyword);

    return this.httpClient.get(this.apiUrl + '/paginate', { params });
  }
}
