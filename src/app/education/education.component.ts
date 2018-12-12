import { Component, OnInit } from '@angular/core';
import {EducationService} from '../education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor(private educationService: EducationService) { }

  ngOnInit() {
  }

  getEducation() {
    return this.educationService.getEducation();
  }

}
