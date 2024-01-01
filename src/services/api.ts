import axios from 'axios';
import { key } from '../../key';

const BASE_URL = `https://api.nasa.gov/neo/rest/v1/`;
const REQUEST_TIMEOUT = 10000;
const KEY = key;

const createApi = () =>
  axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
  });

interface GetAsteroidsRequest {
  start_date: string;
  end_date?: string;
}

interface GetAsteriodsResponse {
  links: {
    next: string;
    previous: string;
    self: string;
  };
  element_count: number;
  near_earth_objects: {
    [date: string]: [
      {
        links: {
          self: string;
        };
        id: string;
        neo_reference_id: string;
        name: string;
        nasa_jpl_url: string;
        absolute_magnitude_h: number;
        estimated_diameter: {
          kilometers: {
            estimated_diameter_min: number;
            estimated_diameter_max: number;
          };
          meters: {
            estimated_diameter_min: number;
            estimated_diameter_max: number;
          };
          miles: {
            estimated_diameter_min: number;
            estimated_diameter_max: number;
          };
          feet: {
            estimated_diameter_min: number;
            estimated_diameter_max: number;
          };
        };
        is_potentially_hazardous_asteroid: true;
        close_approach_data: [
          {
            close_approach_date: string;
            close_approach_date_full: string;
            epoch_date_close_approach: number;
            relative_velocity: {
              kilometers_per_second: string;
              kilometers_per_hour: string;
              miles_per_hour: string;
            };
            miss_distance: {
              astronomical: string;
              lunar: string;
              kilometers: string;
              miles: string;
            };
            orbiting_body: string;
          },
        ];
        is_sentry_object: boolean;
      },
    ];
  };
}

export default function fetchAsteroids(params: GetAsteroidsRequest) {
  const { start_date, end_date } = params;

  return createApi()
    .get('feed', { params: { start_date, end_date, api_key: KEY } })
    .then((res) => res.data.near_earth_objects);
}

// RESPONSE EXAMPLE
/*
const getAsteriodsResponse = {
  "links": {
    "next": "http://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-08&end_date=2015-09-09&detailed=false&api_key=DEMO_KEY",
    "previous": "http://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-06&end_date=2015-09-07&detailed=false&api_key=DEMO_KEY",
    "self": "http://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&detailed=false&api_key=DEMO_KEY"
  },
  "element_count": 25,
  "near_earth_objects": {
    "2015-09-08": [
      {
        "links": {
          "self": "http://api.nasa.gov/neo/rest/v1/neo/2465633?api_key=DEMO_KEY"
        },
        "id": "2465633",
        "neo_reference_id": "2465633",
        "name": "465633 (2009 JR5)",
        "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2465633",
        "absolute_magnitude_h": 20.44,
        "estimated_diameter": {
          "kilometers": {
            "estimated_diameter_min": 0.2170475943,
            "estimated_diameter_max": 0.4853331752
          },
          "meters": {
            "estimated_diameter_min": 217.0475943071,
            "estimated_diameter_max": 485.3331752235
          },
          "miles": {
            "estimated_diameter_min": 0.1348670807,
            "estimated_diameter_max": 0.3015719604
          },
          "feet": {
            "estimated_diameter_min": 712.0984293066,
            "estimated_diameter_max": 1592.3004946003
          }
        },
        "is_potentially_hazardous_asteroid": true,
        "close_approach_data": [
          {
            "close_approach_date": "2015-09-08",
            "close_approach_date_full": "2015-Sep-08 20:28",
            "epoch_date_close_approach": 1441744080000,
            "relative_velocity": {
              "kilometers_per_second": "18.1279360862",
              "kilometers_per_hour": "65260.5699103704",
              "miles_per_hour": "40550.3802312521"
            },
            "miss_distance": {
              "astronomical": "0.3027469457",
              "lunar": "117.7685618773",
              "kilometers": "45290298.225725659",
              "miles": "28142086.3515817342"
            },
            "orbiting_body": "Earth"
          }
        ],
        "is_sentry_object": false
      },
    ]
  }
}
*/
