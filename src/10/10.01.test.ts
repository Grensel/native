import { title } from "process";
import {
  addNewBooksToUser,
  CompanyType,
  makeHairstyle,
  moveUser,
  moveUserToOtherHouse,
  removeBook,
  updateBook,
  updateCompanyTitle,
  updatedCompanyTitle,
  upgradeUserLaptop,
  UserType,
  UserWithBoksTypu,
  UserWithLaptopTypu,
  WithCompaniesTypu,
} from "./10.01";

test("reference type test", () => {
  let user: UserType = {
    name: "Dimych",
    hair: 32,
    address: {
      city: "Minsk",
    },
  };
  const awesomeUser = makeHairstyle(user, 2);
  user.address.city = "Kiev";

  expect(user.hair).toBe(32);
  expect(awesomeUser.hair).toBe(16);
  expect(awesomeUser.address).toBe(user.address);
  expect(awesomeUser.address.city).toBe(user.address.city);
});

test("cange address", () => {
  let user: UserWithLaptopTypu = {
    name: "Dimych",
    hair: 32,
    address: {
      city: "Minsk",
      house: 12,
    },
    laptop: {
      title: "ZenBook",
      count: 1,
    },
  };
  const movedUser = moveUser(user, "Kiev");
  expect(user).not.toBe(movedUser);
  expect(user.address).not.toBe(movedUser.address);
  expect(user.laptop).toBe(movedUser.laptop);
  expect(movedUser.address.title).toBe("Kiev");
});

test("apgrade laptop to mackbook", () => {
  let user: UserWithLaptopTypu = {
    name: "Dimych",
    hair: 32,
    address: {
      city: "Minsk",
      house: 12,
    },
    laptop: {
      title: "ZenBook",
      count: 1,
    },
  };
  const userWithUpgrededLaptop = upgradeUserLaptop(user, "MackBook");
  expect(user).not.toBe(userWithUpgrededLaptop);
  expect(user.laptop).not.toBe(userWithUpgrededLaptop.laptop);
  expect(user.address).toBe(userWithUpgrededLaptop.address);
  expect(userWithUpgrededLaptop.laptop.title).toBe("MackBook");
  expect(user.laptop.title).toBe("ZenBook");
});

test("apgrade move to newHouse", () => {
  let user: UserWithLaptopTypu & UserWithBoksTypu = {
    name: "Dimych",
    hair: 32,
    address: {
      city: "Minsk",
      house: 12,
    },
    laptop: {
      title: "ZenBook",
      count: 1,
    },
    books: ["css", "html", "js", "react"],
  };
  const userCopy = moveUserToOtherHouse(user, 99);
  expect(user).not.toBe(userCopy);
  expect(user.books).toBe(userCopy.books);
  expect(user.laptop).toBe(userCopy.laptop);
  expect(user.address).not.toBe(userCopy.address);
  expect(userCopy.laptop.title).toBe("ZenBook");
  expect(user.laptop.title).toBe("ZenBook");
  expect(user.address.house).not.toBe(userCopy.address.house);
  expect(userCopy.address.house).toBe(99);
});

test("add new books to user", () => {
  let user: UserWithLaptopTypu & UserWithBoksTypu = {
    name: "Dimych",
    hair: 32,
    address: {
      city: "Minsk",
      house: 12,
    },
    laptop: {
      title: "ZenBook",
      count: 1,
    },
    books: ["css", "html", "js", "react"],
  };

  const userCopy = addNewBooksToUser(user, "ts");

  expect(user).not.toBe(userCopy);
  expect(user.books).not.toBe(userCopy.books);
  expect(user.laptop).toBe(userCopy.laptop);
  expect(user.address).toBe(userCopy.address);
  expect(userCopy.books.length).toBe(5);
  expect(userCopy.books[4]).toBe("ts");
  expect(user.books.length).toBe(4);
});

test("apdate js to ts", () => {
  let user: UserWithLaptopTypu & UserWithBoksTypu = {
    name: "Dimych",
    hair: 32,
    address: {
      city: "Minsk",
      house: 12,
    },
    laptop: {
      title: "ZenBook",
      count: 1,
    },
    books: ["css", "html", "js", "react"],
  };
  const userCopy = updateBook(user, "js", "ts");
  expect(user).not.toBe(userCopy);
  expect(user.books).not.toBe(userCopy.books);
  expect(user.laptop).toBe(userCopy.laptop);
  expect(user.address).toBe(userCopy.address);
  expect(userCopy.books[2]).toBe("ts");
});

test("remove js book", () => {
  let user: UserWithLaptopTypu & UserWithBoksTypu = {
    name: "Dimych",
    hair: 32,
    address: {
      city: "Minsk",
      house: 12,
    },
    laptop: {
      title: "ZenBook",
      count: 1,
    },
    books: ["css", "html", "js", "react"],
  };
  const userCopy = removeBook(user, "js");
  expect(user).not.toBe(userCopy);
  expect(user.laptop).toBe(userCopy.laptop);
  expect(user.address).toBe(userCopy.address);
  expect(user.books).not.toBe(userCopy.books);
  expect(userCopy.books[2]).toBe("react");
});

test("update new company", () => {
  let user: WithCompaniesTypu & UserWithLaptopTypu = {
    name: "Dimych",
    hair: 32,
    address: {
      city: "Minsk",
      house: 12,
    },
    laptop: {
      title: "ZenBook",
      count: 1,
    },
    companies: [
      {
        id: 1,
        title: "Ерам",
      },
      {
        id: 2,
        title: "IT-INCUBATOR",
      },
    ],
  };

  const userCopy = updateCompanyTitle(user, 1, "Epam") as WithCompaniesTypu &
    UserWithLaptopTypu;

  expect(user).not.toBe(userCopy);
  expect(user.address).toBe(userCopy.address);
  expect(user.laptop).toBe(userCopy.laptop);
  expect(user.companies).not.toBe(userCopy.companies);
  expect(userCopy.companies[0]).not.toBe("Epam");
});

test("updated new company", () => {
  let companies = {
    Dimich: [
      {
        id: 1,
        title: "Ерам",
      },
      {
        id: 2,
        title: "IT-INCUBATOR",
      },
    ],
    Artem: {
      id: 2,
      title: "IT-INCUBATOR",
    },
  };

  const copy = updatedCompanyTitle(companies, "Dimich", 1, "EPAM");

  expect(copy["Dimich"]).not.toBe(companies["Dimich"]);
  expect(copy["Artem"]).toBe(companies["Artem"]);
  expect(copy["Dimich"][0].title).toBe("EPAM");
});
