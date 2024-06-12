import { Injectable } from '@angular/core';
import {BaseService} from "../base.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Constants} from "../../class/util/constants";

@Injectable({
  providedIn: 'root'
})
export class FormService extends BaseService {

  constructor(protected override http: HttpClient) {
    super(http);
  }

  formSend(formData: FormData): Observable<any> {
    const api = Constants.FORM_API;
    return this.req(formData, api, 'post');
  }

  formulaireSend(formBody: any): Observable<any> {
    const api = Constants.FORMULAIRE_API;
    return this.req(formBody, api, 'post');
  }
}
