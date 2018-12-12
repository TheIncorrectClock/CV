import {School} from './school';

export const EDUCATION: School[] = [
  {
    name: 'Gdańsk University of Technology',
    from: new Date(2006, 10),
    to: new Date(2011, 11),
    course: 'Informatics',
    specializations: [
      'Distributed Algorithms and Internet Systems', 'Geoinformatics and Mobile Systems'
    ]
  }
];
