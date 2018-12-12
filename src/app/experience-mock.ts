import {Company} from './company';

export const EXPERIENCE: Company[] = [
  {name: 'Lufthansa Systems Poland', positions: [
      {title: 'Architecture Owner', responsibilities: []},
      {title: 'Senior Software Engineer', responsibilities: []},
      {title: 'Software Engineer', responsibilities: []}
    ], from: new Date(2014, 2)},
  {name: 'Gdańsk University of Technology', positions: [
      {title: 'Lecturer', responsibilities: []}
    ], from: new Date(2013, 9), to: new Date(2014, 8)},
  {name: 'Regional Geodesy and Cartography Company OPGK', positions: [
      {title: 'R&D Engineer', responsibilities: []}
    ], from: new Date(2012, 11), to: new Date(2013, 10)},
  {name: 'Aidem Media', positions: [
      {title: 'Game Developer', responsibilities: []}
    ], from: new Date(2010, 5), to: new Date(2012, 10)},
];
