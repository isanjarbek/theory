//  1. Check object type
typeof yourVariable === "object" &&
  !Array.isArray(yourVariable) &&
  yourVariable !== null;

// 2. memoize callback function
function getData(n, m, callback) {
  callback(n + m);
}
let memoizedData = memoize(getData);

memoizedData(5, 4, console.log); // 9 calling getData;
memoizedData(5, 4, console.log); // 9 from memory;

// 3. cache function
function cacheFn(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg]) {
      return cache[arg];
    } else {
      cache[arg] = fn(arg);
      return cache[arg];
    }
  };
}

// 4. pipe function
getName = (person) => person.name;
getName({ name: "Buckethead" });
// 'Buckethead'

uppercase = (string) => string.toUpperCase();
uppercase("Buckethead");
// 'BUCKETHEAD'

name = getName({ name: "Buckethead" });
uppercase(name);
// 'BUCKETHEAD'

uppercase(getName({ name: "Buckethead" }));

const obj = {
  name: "Aziz",
  child: {
    name: "Laziz",
    child: {
      name: "Akmal",
      child: {
        name: "Hakim",
      },
    },
  },
};

function getName(obj) {
  while (obj?.hasOwnProperty("child") || obj?.hasOwnProperty("name")) {
    if (!obj?.hasOwnProperty("child")) {
      console.log(obj.name);
    }
    obj = obj.child;
  }
}

// getName(obj);

const twoSum = function (nums, target) {
  const comp = {};
  for (let i = 0; i < nums.length; i++) {
    if (comp[nums[i]] >= 0) {
      return [comp[nums[i]], i];
    }
    comp[target - nums[i]] = i;
  }
};
