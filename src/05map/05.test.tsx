import { CityType } from "../02/02_02";
import {
  createGreetingMessage,
  createMessages,
  getStreetsTitlesOfGovernmentBuildings,
  getStreetsTitlesOfHouses,
  ManType,
} from "./05";

let people: Array<ManType>;
beforeEach(() => {
  people = [
    { name: "Andrew Ivanov", age: 33 },
    { name: "Alexander Petrov", age: 24 },
    { name: "Dmitry Sidorov", age: 18 },
  ];
});

test("should get array of greeting messages", () => {
  const messages = createGreetingMessage(people);

  expect(messages.length).toBe(3);
  expect(messages[0]).toBe("Hello Andrew. Welcome to hell");
  expect(messages[1]).toBe("Hello Alexander. Welcome to hell");
  expect(messages[2]).toBe("Hello Dmitry. Welcome to hell");
});

let city: CityType;

beforeEach(() => {
  city = {
    title: "NewYork",
    houses: [
      {
        id: 1,
        buildedAt: 2012,
        repaired: false,
        address: {
          number: 100,
          street: { title: "White street" },
        },
      },
      {
        id: 2,
        buildedAt: 2008,
        repaired: false,
        address: {
          number: 100,
          street: { title: "Happy street" },
        },
      },
      {
        id: 3,
        buildedAt: 2020,
        repaired: false,
        address: {
          number: 101,
          street: { title: "Happy street" },
        },
      },
    ],
    governmentBuildings: [
      {
        type: "HOSPITAL",
        budget: 200000,
        staffCount: 200,
        address: {
          street: {
            title: "Central str",
          },
          number: 12,
        },
      },
      {
        type: "FIRE-STATION",
        budget: 500000,
        staffCount: 1000,
        address: {
          street: {
            title: "Souths str",
          },
          number: 12,
        },
      },
    ],
    citizensNumber: 1000000,
  };
});

// 01. создайте в том же файле ещё одну функцию, чтобы тесты прошли
test("list of streets titles of government buildings", () => {
  const streetsNames = getStreetsTitlesOfGovernmentBuildings(
    city.governmentBuildings
  );

  expect(streetsNames.length).toBe(2);
  expect(streetsNames[0]).toBe("Central str");
  expect(streetsNames[1]).toBe("Souths str");
});

//02. создайте в том же файле ещё одну функцию, чтобы тесты прошли
test("list of streets titles", () => {
  const streetsNames = getStreetsTitlesOfHouses(city.houses);

  expect(streetsNames.length).toBe(3);
  expect(streetsNames[0]).toBe("White street");
  expect(streetsNames[1]).toBe("Happy street");
  expect(streetsNames[2]).toBe("Happy street");
});

test("create greeting messages for streets", () => {
  const messages = createMessages(city.houses);
  expect(messages.length).toBe(3);
  expect(messages[0]).toBe("Hello guys from White street");
  expect(messages[1]).toBe("Hello guys from Happy street");
  expect(messages[2]).toBe("Hello guys from Happy street");
});
