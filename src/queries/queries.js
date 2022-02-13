import { gql } from "@apollo/client";

export const getUser = gql`
  query GetUser {
    users {
      id
      name
      timestamp
      twitter
      rocket
    }
  }
`;

export const user_subscription = gql`
  subscription Subscription {
    users {
      id
      name
      timestamp
    }
  }
`;

export const getCompanies = gql`
  query GetCompanies {
    company {
      ceo
      coo
      cto_propulsion
      cto
      employees
      founded
      founder
      headquarters {
        city
        state
        address
      }
      links {
        flickr
        twitter
        website
      }
      name
      vehicles
      valuation
      summary
    }
  }
`;

export const getRockets = gql`
  query GetRockets {
    rockets {
      name
      mass {
        kg
      }
      description
      country
      company
      cost_per_launch
      type
      height {
        meters
      }
      active
    }
  }
`;

export const getMissions = gql`
  query GetMissions {
    missions {
      id
      name
      description
      manufacturers
      twitter
      website
      payloads {
        reused
        payload_type
        payload_mass_kg
        orbit
        nationality
        manufacturer
        id
      }
    }
  }
`;

export const addUser = gql`
  mutation AddUser($objects: [users_insert_input!]!) {
    insert_users(objects: $objects) {
      returning {
        id
        name
        rocket
        timestamp
        twitter
      }
    }
  }
`;

export const deleteUser = gql`
  mutation DeleteUser($where: users_bool_exp!) {
    delete_users(where: $where) {
      returning {
        id
        name
        timestamp
      }
    }
  }
`;
