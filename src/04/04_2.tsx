import { CityType, GovernmentBuildings } from "../02/02_02";

export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
  city.houses = city.houses.filter((h) => h.address.street.title !== street);
};

export const getBuildingsWithStaffCountGreaterThen = (
  buildings: GovernmentBuildings[],
  number: number
) => {
  return buildings.filter((b) => b.staffCount > number);
};
