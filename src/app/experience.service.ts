import { Injectable } from '@angular/core';
import { EXPERIENCE } from './experience-mock';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor() { }

  getExperience() {
    return EXPERIENCE;
  }
}
