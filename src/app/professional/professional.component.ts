import {Component, OnInit} from '@angular/core';
import {ExperienceService} from '../experience.service';
import {Company} from '../company';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.scss']
})
export class ProfessionalComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private experienceService: ExperienceService) {
  }

  getExperience() {
    return this.experienceService.getExperience();
  }
}
