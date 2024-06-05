export interface AsteroidsType {
  [date: string]: Asteroid[];
}

export interface Asteroid {
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
  is_potentially_hazardous_asteroid: boolean;
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
}

export interface AsteroidInfo {
  absolute_magnitude_h: number;
  close_approach_data: [
    {
      close_approach_date: string;
      close_approach_date_full: string;
      epoch_date_close_approach: number;
      miss_distance: {
        astronomical: string;
        kilometers: string;
        lunar: string;
        miles: string;
      };
      orbiting_body: string;
      relative_velocity: {
        kilometers_per_hour: string;
        kilometers_per_second: string;
        miles_per_hour: string;
      };
    },
  ];
  designation: string;
  estimated_diameter: {
    feet: {
      estimated_diameter_min: number;
      estimated_diameter_max: number;
    };
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
  };
  id: string;
  is_potentially_hazardous_asteroid: boolean;
  is_sentry_object: boolean;
  links: {
    self: string;
  };
  name: string;
  nasa_jpl_url: string;
  neo_reference_id: string;
  orbital_data: {
    aphelion_distance: string;
    ascending_node_longitude: string;
    data_arc_in_days: number;
    eccentricity: string;
    epoch_osculation: string;
    equinox: string;
    first_observation_date: string;
    inclination: string;
    jupiter_tisserand_invariant: string;
    last_observation_date: string;
    mean_anomaly: string;
    mean_motion: string;
    minimum_orbit_intersection: string;
    observations_used: number;
    orbit_class: {
      orbit_class_description: string;
      orbit_class_range: string;
      orbit_class_type: string;
    };
    orbit_determination_date: string;
    orbit_id: string;
    orbit_uncertainty: string;
    orbital_period: string;
    perihelion_argument: string;
    perihelion_distance: string;
    perihelion_time: string;
    semi_major_axis: string;
  };
}

export enum UnitDistance {
  Kilometers = 'kilometers',
  Lunar = 'lunar',
}
