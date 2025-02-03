export type UserType = {
  name: string;
  hair: number;
  address: {
    city: string;
    house?: number;
  };
};
export type LaptopType = {
  title: string;
  count: number;
};
export type UserWithLaptopTypu = UserType & {
  laptop: LaptopType;
};
export type UserWithBoksTypu = UserType & {
  books: Array<string>;
};

export type CompanyType = { id: number; title: string };
export type WithCompaniesTypu = UserType & {
  companies: Array<CompanyType>;
};

export const makeHairstyle = (u: UserType, power: number) => {
  const copy = {
    ...u,
    hair: u.hair / power,
  };
  //coppy.hair = u.hair / power;
  return copy;
};

export const moveUser = (u: UserWithLaptopTypu, newCity: string) => {
  return {
    ...u,
    address: { ...u.address, title: newCity },
  };
};

export const upgradeUserLaptop = (u: UserWithLaptopTypu, newLaptop: string) => {
  return {
    ...u,
    laptop: { ...u.laptop, title: newLaptop },
  };
};

export const moveUserToOtherHouse = (
  u: UserWithLaptopTypu & UserWithBoksTypu,
  newHouse: number
) => {
  return {
    ...u,
    address: { ...u.address, house: newHouse },
  };
};

export const addNewBooksToUser = (u: UserWithLaptopTypu & UserWithBoksTypu, newBooks: string) => {
  return {
    ...u,
    books: [...u.books, newBooks],
  };
};

export const updateBook = (
  u: UserWithLaptopTypu & UserWithBoksTypu,
  oldBook: string,
  newBooks: string
) => ({
  ...u,
  books: u.books.map(b => (b === oldBook ? newBooks : b)),
});

export const removeBook = (u: UserWithLaptopTypu & UserWithBoksTypu, removewBook: string) => ({
  ...u,
  books: u.books.filter(b => b !== removewBook),
});

export const updateCompanyTitle = (u: WithCompaniesTypu, id: number, newTitle: string) => ({
  ...u,
  companies: u.companies.map(c => (c.id === id ? { ...c, title: newTitle } : c)),
});

export const updatedCompanyTitle = (
  companies: { [key: string]: CompanyType[] },
  userName: string,
  companyId: number,
  newTitle: string
) => {
  let companyCopy = { ...companies };

  companyCopy[userName] = companyCopy[userName].map(c =>
    c.id === companyId ? { ...c, title: newTitle } : c
  );

  return companyCopy;
};
