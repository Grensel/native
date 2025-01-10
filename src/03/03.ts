import { StudentType } from "../02/02";
import { GovernmentBuildings, HousesType } from "../02/02_02";

debugger;
export const sum = (a: number, b: number) => {
  return a + b;
};

const res = sum(sum(1, 2), sum(1, 3));

export const addSkill = (st: StudentType, skill: string) => {
  st.technologies.push({ id: new Date().getTime(), title: skill });
};

export function makeStudentActive(s: StudentType) {
  s.isActive = true;
}

export const changeStudentLive = (s: StudentType, cityName: string) => {
  return s.address.city.title === cityName;
};

export const changeBudget = (building: GovernmentBuildings, budget: number) => {
  building.budget += budget;
};

export const repairHouse = (houseTepe: HousesType) => {
  houseTepe.repaired = true;
};

export const toFireStaff = (
  building: GovernmentBuildings,
  stuffCountToFire: number
) => {
  building.staffCount -= stuffCountToFire;
};

export const toHireStaff = (
  building: GovernmentBuildings,
  stuffCountToHure: number
) => {
  building.staffCount += stuffCountToHure;
};
