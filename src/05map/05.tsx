import { GovernmentBuildings, HousesType } from "../02/02_02";

export type ManType = {
  name: string;
  age: number;
};

const people: Array<ManType> = [
  { name: "Andrew Ivanov", age: 33 },
  { name: "Alexander Petrov", age: 24 },
  { name: "Dmitry Sidorov", age: 18 },
];

const dimychTransformator = (man: ManType) => ({
  stack: ["css", "html", "js", "tdd", "react"],
  firstName: man.name.split(" ")[0],
  lastName: man.name.split(" ")[1],
});

const devs = [
  {
    stack: ["css", "html", "js", "tdd", "react"],
    firstName: "Andrew",
    lastName: "Ivanov",
  },

  {
    stack: ["css", "html", "js", "tdd", "react"],
    firstName: "Alexander",
    lastName: "Petrov",
  },

  {
    stack: ["css", "html", "js", "tdd", "react"],
    firstName: "Dmitry",
    lastName: "Sidorov",
  },
];

const devs2 = [
  dimychTransformator(people[0]),
  dimychTransformator(people[1]),
  dimychTransformator(people[2]),
];

const devs3 = people.map((man) => ({
  stack: ["css", "html", "js", "tdd", "react"],
  firstName: man.name.split(" ")[0],
  lastName: man.name.split(" ")[1],
}));

const messages = people.map(
  (man) => `Hello ${man.name.split(" ")[0]}. Welcome to hell`
);
export const createGreetingMessage = (people: ManType[]) => {
  return people.map(
    (man) => `Hello ${man.name.split(" ")[0]}. Welcome to hell`
  );
};

export const getStreetsTitlesOfGovernmentBuildings = (
  buildings: GovernmentBuildings[]
) => {
  return buildings.map((b) => b.address.street.title);
};

export const getStreetsTitlesOfHouses = (houses: HousesType[]) => {
  return houses.map((h) => h.address.street.title);
};

export const createMessages = (houses: HousesType[]) =>
  houses.map((h) => `Hello guys from ${h.address.street.title}`);
