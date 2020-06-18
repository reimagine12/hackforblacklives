import arts_and_culture from './arts_and_culture.png';
import housing from './housing.png';
import head_start from './head_start.png';
import health_and_hospitals from './health_and_hospitals.png'; 
import small_business_services from './small_business_services.svg';
import infrastructure from './infrastructure.svg';
import seniors from './seniors.svg';
import fire_and_ems from './fire_and_ems.svg';
import mental_health_services from './mental_health_services.svg';

import cpr from './logo.jpg';
import jc from './JCLOGO.jpg';
import e4f from './E4F-Logo-White-SVG.jpg';


export const max = 6000000000;

export const barColors = [
  'black', 
  '#8F7CEE', 
  '#F85788', 
  '#5AECFC', 
  '#00EC96', 
  '#8F7CEE', 
  '#F85788', 
  '#5AECFC', 
  '#00EC96', 
  '#8F7CEE', 
  '#F85788', 
  '#5AECFC'];

export const categories = [
  'police',
  'arts_and_culture',
  'head_start',
  'homeless_services',
  'mental_health',
  'health_and_hospitals',
  'seniors',
  'infrastructure',
  'veterans_services',
  'fire_and_ems',
  'housing',
  'small_business_services'
];

export const data = {
  'police': {
    id: 0,
    title: 'Police',
    initial_amount: 5570000000,
    image: housing,
    impact: 'all the things that make people healthier and safer. And you defunded the police! Great job',
  },
  'arts_and_culture': {
    id: 1,
    title: 'Arts and Culture',
    per_unit: 12,
    initial_amount: 137000000,
    image: arts_and_culture,
    sentence: 'You helped',
    impact: 'students take a class trip to the Metropolitan Museum of Art'
  },
  'head_start': {
    id: 2,
    title: 'Education',
    per_unit: 12063.90,
    initial_amount: 1949000,
    image: head_start,
    sentence: 'You created',
    impact: 'spots in the city\'s Head Start Program'
  },
  'homeless_services': {
    id: 3,
    title: 'Homeless Services',
    per_unit: 46948.36,
    initial_amount: 2070000000,
    image: housing,
    sentence: 'You created',
    impact: 'homeless family shelter units for a year',
  },
  'mental_health': {
    id: 4,
    title: 'Mental Health Services',
    per_unit: 150,
    initial_amount: 578000000,
    image: mental_health_services,
    sentence: 'You covered the cost of ',
    impact: 'counseling sessions for low-income New Yorkers'
  },
  'health_and_hospitals': {
    id: 5,
    title: 'Healthcare',
    per_unit: 5.75,
    initial_amount: 773000000,
    image: health_and_hospitals,
    sentence: 'You secured',
    impact: 'N95 masks for hospital staff'
  },
  'seniors': {
    id: 6,
    title: 'Seniors Services',
    per_unit: 2.22,
    initial_amount: 385000000,
    image: seniors,
    sentence: 'You got',
    impact: 'meals delivered to seniors this year',
  },
  'infrastructure': {
    id: 7,
    title: 'Infrastructure',
    per_unit: 149253.73,
    initial_amount: 1100000000,
    image: infrastructure,
    sentence: 'You repaved',
    impact: 'miles of road'
  },
  'veterans_services': {
    id: 8,
    title: 'Veterans Services',
    per_unit: 685,
    initial_amount: 1125000000,
    image: housing,
    sentence: 'You prevented',
    impact: 'veteran from becoming homeless this year',
  },
  'fire_and_ems': {
    id: 9,
    title: 'Fire and EMS',
    per_unit: 1428571.43,
    initial_amount: 2090000000,
    image: fire_and_ems,
    sentence: 'You bought',
    impact: 'fire trucks',
  },
  'housing': {
    id: 10,
    title: 'Housing',
    per_unit: 2107,
    initial_amount: 262000000,
    image: housing,
    sentence: 'You created',
    impact: '2-bedroom apartment voucher for section 8 housing assistance',
  },
  'small_business_services': {
    id: 11,
    title: 'Economic Development',
    per_unit: 75000,
    initial_amount: 160800000,
    image: small_business_services,
    sentence: 'You provided',
    impact: 'zero interest loans for local small businesses',
  }
};

export const nonProfits = [
  {
    'name': 'Communities United for Police Reform',
    'path': 'https://www.changethenypd.org/',
    image: cpr,
    color: 'red',
    
  },
  {
    'name': 'Justice Committee',
    'path': 'https://www.justicecommittee.org',
    image: jc,
    'color': 'yellow',
    

  },
  {
    'name': 'Equality for Flatbush',
    'path': 'http://www.equalityforflatbush.org/',
    image: e4f,
    'color': '#000000',
  },
]

export const url = "http://www.reimagine12.com";