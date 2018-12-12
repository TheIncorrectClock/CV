import {Injectable} from '@angular/core';
import {EDUCATION} from './education-mock';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor() {
  }

  getEducation() {
    return EDUCATION;
  }
}
