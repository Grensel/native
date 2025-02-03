type UserType = {
  name: string;
  age: number;
  adress: {
    title: string;
  };
};

const icreaseAge = (u: UserType) => {
  u.age++;
};

test("reference type test", () => {
  const user: UserType = {
    name: "Dimych",
    age: 32,
    adress: {
      title: "Minsk",
    },
  };
  icreaseAge(user);
  expect(user.age).toBe(33);

  const superman = user;
  superman.age = 1000;
  expect(user.age).toBe(1000);
});

test("array type test", () => {
  const users = [
    {
      name: "Dimych",
      age: 32,
    },
    {
      name: "Dimych",
      age: 32,
    },
  ];

  const admins = users;

  admins.push({ name: "bamdugan", age: 10 });

  expect(users[2]).toEqual({ name: "bamdugan", age: 10 });
});

test("value type test", () => {
  const usersCount = 100;
  let adminsCount = usersCount;

  adminsCount++;
  expect(usersCount).toBe(100);
  expect(adminsCount).toBe(101);
});

test("references type test", () => {
  let adrress = {
    title: "Minsk",
  };
  const user: UserType = {
    name: "Dimych",
    age: 32,
    adress: adrress,
  };

  const user2: UserType = {
    name: "Natasha",
    age: 30,
    adress: adrress,
  };

  adrress.title = "Minsk City";
  expect(user.adress.title).toBe("Minsk City");
  expect(user.adress).toBe(user2.adress);
});

test("reference type array test", () => {
  let adrress = {
    title: "Minsk",
  };
  const user: UserType = {
    name: "Dimych",
    age: 32,
    adress: adrress,
  };

  const user2: UserType = {
    name: "Natasha",
    age: 30,
    adress: adrress,
  };

  const users = [user, user2, { name: "Misha", age: 18, adrress: adrress }];

  const admins = [user, user2];

  admins[0].name = "Dmitry";

  adrress.title = "Minsk City";
  expect(user.adress.title).toBe("Minsk City");
  expect(users[0].name).toBe("Dmitry");
  expect(user.name).toBe("Dmitry");
});

test("sort array test", () => {
  const letters = ["c", "d", "a", "z", "e"];
  const pass = [...letters].sort();
  expect(letters).toEqual(["c", "d", "a", "z", "e"]);
  expect(pass).toEqual(["a", "c", "d", "e", "z"]);
  passpartist(letters);
  expect(letters).toEqual(["a", "c", "d", "e", "z"]);
});

const passpartist = (letters: any) => {
  letters.sort();
};
