// Optional chaining (?.)

const obj = {
  name: "Alice",
  cat: {
    name: "Dinah",
    cat2: {
      name: "Dinah 2",
      cat3: {
        name: "Dinah 3",
      },
    },
  },
};

if (
  //obj.cat && obj.cat.cat2 && obj.cat.cat2.cat3
  obj.cat?.cat2?.cat3
) {
  console.log(obj.cat.cat2.cat3.name);
}

const obj2 = {
  getName(value) {
    console.log(value);
  },
};

obj2.getName?.(123);
