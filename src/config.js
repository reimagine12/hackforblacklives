import arts_and_culture from './arts_and_culture.png';
import housing from './housing.png';
import head_start from './head_start.png';
import health_and_hospitals from './health_and_hospitals.png'; 

export const max = 6000000000;

export const barColors = ['red', 'orange', 'yellow', 'green', 'crimson', 'cornsilk', 'violet', 'blue', 'pink', 'teal', 'black', 'blue', 'gray'];

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
    id: 1,
    title: 'Police',
    initial_amount: 5570000000,
    image: housing,
    impact: 'all the things that make people healthier and safer. And you defunded the police! Great job',
  },
  'arts_and_culture': {
    id: 2,
    title: 'Arts and Culture',
    per_unit: 12,
    initial_amount: 137000000,
    image: arts_and_culture,
    impact: 'visits children can take in their school groups to the metropolitan museum of art'
  },
  'head_start': {
    id: 3,
    title: 'Head Start',
    per_unit: 12063.90,
    initial_amount: 1949000,
    image: head_start,
    impact: 'children in Head Start! Children who participate in Head Start are 12% less likely to live in poverty as adults and 29% less likely to receive public assistance'
  },
  'homeless_services': {
    id: 4,
    title: 'Homeless Services',
    per_unit: 46948.36,
    initial_amount: 2070000000,
    image: housing,
    impact: 'homeless family shelter units for a year',
  },
  'mental_health': {
    id: 5,
    title: 'Mental Health Services',
    per_unit: 150,
    initial_amount: 578000000,
    image: housing,
    impact: 'counseling sessions'
  },
  'health_and_hospitals': {
    id: 6,
    title: 'Health and Hospitals',
    per_unit: 5.75,
    initial_amount: 773000000,
    image: health_and_hospitals,
    impact: 'N95 masks for hospital staff'
  },
  'seniors': {
    id: 7,
    title: 'Seniors',
    per_unit: 2.22,
    initial_amount: 385000000,
    image: housing,
    impact: 'meals delivered to seniors every year',
  },
  'infrastructure': {
    id: 8,
    title: 'Infrastructure',
    per_unit: 149253.73,
    initial_amount: 1100000000,
    image: housing,
    impact: 'miles of road resurfaced'
  },
  'veterans_services': {
    id: 9,
    title: 'Veterans Services',
    per_unit: 685,
    initial_amount: 1125000000,
    image: housing,
    impact: 'veterans prevented from becoming homeless',
  },
  'fire_and_ems': {
    id: 10,
    title: 'Fire and EMS',
    per_unit: 1428571.43,
    initial_amount: 2090000000,
    image: housing,
    impact: 'fire trucks',
  },
  'housing': {
    id: 11,
    title: 'Housing',
    per_unit: 2107,
    initial_amount: 262000000,
    image: housing,
    impact: '2-bedroom apartments with section 8 housing assistance',
  },
  'small_business_services': {
    id: 12,
    title: 'Small Business Services',
    per_unit: 75000,
    initial_amount: 160800000,
    image: housing,
    impact: 'zero interest loans for small businesses',
  }
};

export const nonProfits = [
  {
    'name': 'Communities United for Police Reform',
    'path': 'https://www.changethenypd.org/',
  },
  {
    'name': 'Justice Committee',
    'path': 'https://www.justicecommittee.org',
  },
  {
    'name': 'Equality for Flatbush',
    'path': 'http://www.equalityforflatbush.org/',
  },
]

