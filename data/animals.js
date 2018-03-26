// ===============================================================================
// DATA
// Below data will hold all of the animals.
// ===============================================================================

var animal = [
  {
    routeName: "cat",
    name: "cat",
    role: "pet",
    compatability: 0,
    ChildFriendly: 5,
    Excr: 1,
    Loyalty: 3,
    Emotional: 5,
    Cuddly: 5,
    Backyard: 2,
    Size: 1,
    Energetic: 2,
    Clean: 1,
    catorDog: 2,
    bio: ""
  },
  {
    routeName: "dobberman",
    name: "dobberman",
    role: "pet",
    compatability: 0,
    ChildFriendly: 5,
    Excr: 5,
    Loyalty: 5,
    Emotional: 5,
    Cuddly: 5,
    Backyard: 1,
    Size: 3,
    Energetic: 5,
    Clean: 2,
    catorDog: 1,
    bio: ""
  },
  {
    routeName: "snake",
    name: "Anaconda",
    role: "pet",
    compatability: 0,
    ChildFriendly: 1,
    Excr: 1,
    Loyalty: 1,
    Emotional: 2,
    Cuddly: 2,
    Backyard: 1,
    Size: 3,
    Energetic: 1,
    Clean: 2,
    catorDog: 0,
    bio: ""
  },
  {
    routeName: "rat",
    name: "Hamster",
    role: "pet",
    compatability: 0,
    ChildFriendly: 3,
    Excr: 1,
    Loyalty: 2,
    Emotional: 3,
    Cuddly: 1,
    Backyard: 0,
    Size: 1,
    Energetic: 2,
    Clean: 4,
    catorDog: 0,
    bio: ""
  },
  {
    routeName: "bird",
    name: "parrot",
    role: "pet",
    compatability: 0,
    ChildFriendly: 2,
    Excr: 1,
    Loyalty: 2,
    Emotional: 2,
    Cuddly: 1,
    Backyard: 0,
    Size: 1,
    Energetic: 2,
    Clean: 4,
    catorDog: 0,
    bio: ""
  },
  {
    routeName: "monkey",
    name: "chipmunk",
    role: "pet",
    compatability: 0,
    ChildFriendly: 4,
    Excr: 5,
    Loyalty: 3,
    Emotional: 5,
    Cuddly: 5,
    Backyard: 1,
    Size: 3,
    Energetic: 5,
    Clean: 2,
    catorDog: 0,
    bio: ""
  },
  {
    routeName: "rabbit",
    name: "rabbit",
    role: "pet",
    compatability: 0,
    ChildFriendly: 3,
    Excr: 2,
    Loyalty: 2,
    Emotional: 3,
    Cuddly: 4,
    Backyard: 1,
    Size: 2,
    Energetic: 3,
    Clean: 3,
    catorDog: 0,
    bio: ""
  },
  {
    routeName: "turttle",
    name: "turttle",
    role: "pet",
    compatability: 0,
    ChildFriendly: 2,
    Excr: 1,
    Loyalty: 2,
    Emotional: 4,
    Cuddly: 1,
    Backyard: 1,
    Size: 1,
    Energetic: 1,
    Clean: 4,
    catorDog: 0,
    bio: ""
  },
  {
    routeName: "lizard",
    name: "chameleon",
    role: "pet",
    compatability: 0,
    ChildFriendly: 4,
    Excr: 1,
    Loyalty: 2,
    Emotional: 3,
    Cuddly: 1,
    Backyard: 1,
    Size: 1,
    Energetic: 1,
    Clean: 5,
    catorDog: 0,
    bio: ""
  },
  {
    routeName: "chinchilla",
    name: "chinchilla",
    role: "pet",
    compatability: 0,
    ChildFriendly: 5,
    Excr: 2,
    Loyalty: 3,
    Emotional: 5,
    Cuddly: 3,
    Backyard: 1,
    Size: 1,
    Energetic: 2,
    Clean: 3,
    catorDog: 0,
    bio: ""
  },
  {
    routeName: "ferret",
    name: "ferret",
    role: "pet",
    compatability: 0,
    ChildFriendly: 4,
    Excr: 2,
    Loyalty: 3,
    Emotional: 3,
    Cuddly: 3,
    Backyard: 1,
    Size: 1,
    Energetic: 2,
    Clean: 3,
    catorDog: 0,
    bio: ""
  },
  {
    routeName: "fish",
    name: "fish",
    role: "pet",
    compatability: 0,
    ChildFriendly: 4,
    Excr: 2,
    Loyalty: 3,
    Emotional: 3,
    Cuddly: 1,
    Backyard: 0,
    Size: 1,
    Energetic: 1,
    Clean: 5,
    catorDog: 0,
    bio: ""
  },
  {
    routeName: "dog",
    name: "german shepherd",
    role: "pet",
    compatability: 0,
    ChildFriendly: 5,
    Excr: 4,
    Loyalty: 5,
    Emotional: 5,
    Cuddly: 5,
    Backyard: 1,
    Size: 3,
    Energetic: 3,
    Clean: 2,
    catorDog: 1,
    bio: ""
  },
  {
    routeName: "dog",
    name: "siberian husky",
    role: "pet",
    compatability: 0,
    ChildFriendly: 5,
    Excr: 5,
    Loyalty: 5,
    Emotional: 5,
    Cuddly: 5,
    Backyard: 1,
    Size: 3,
    Energetic: 5,
    Clean: 2,
    catorDog: 1,
    bio: ""
  },
  {
    routeName: "dog",
    name: "pit bull",
    role: "pet",
    compatability: 0,
    ChildFriendly: 2,
    Excr: 3,
    Loyalty: 3,
    Emotional: 2,
    Cuddly: 2,
    Backyard: 1,
    Size: 3,
    Energetic: 3,
    Clean: 2,
    catorDog: 1,
    bio: ""
  },
  {
    routeName: "dog",
    name: "poodle",
    role: "pet",
    compatability: 0,
    ChildFriendly: 4,
    Excr: 2,
    Loyalty: 3,
    Emotional: 3,
    Cuddly: 3,
    Backyard: 1,
    Size: 3,
    Energetic: 2,
    Clean: 3,
    catorDog: 1,
    bio: ""
  },
  {
    routeName: "cat",
    name: "egyptian cat",
    role: "pet",
    compatability: 0,
    ChildFriendly: 5,
    Excr: 1,
    Loyalty: 5,
    Emotional: 5,
    Cuddly: 5,
    Backyard: 1,
    Size: 2,
    Energetic: 2,
    Clean: 1,
    catorDog: 2,
    bio: ""
  },
  {
    routeName: "cat",
    name: "persian cat",
    role: "pet",
    compatability: 0,
    ChildFriendly: 5,
    Excr: 1,
    Loyalty: 1,
    Emotional: 3,
    Cuddly: 3,
    Backyard: 1,
    Size: 2,
    Energetic: 2,
    Clean: 3,
    catorDog: 2,
    bio: ""
  },
  {
    routeName: "rat",
    name: "guinnea pig",
    role: "pet",
    compatability: 0,
    ChildFriendly: 3,
    Excr: 1,
    Loyalty: 3,
    Emotional: 5,
    Cuddly: 4,
    Backyard: 1,
    Size: 1,
    Energetic: 2,
    Clean: 4,
    catorDog: 0,
    bio: ""
  },
  {
    routeName: "rat",
    name: "gerbil",
    role: "pet",
    compatability: 0,
    ChildFriendly: 4,
    Excr: 2,
    Loyalty: 3,
    Emotional: 2,
    Cuddly: 3,
    Backyard: 2,
    Size: 1,
    Energetic: 2,
    Clean: 2,
    catorDog: 0,
    bio: ""
  }
  ];

  //Note how we export the array. This makes it accessible to other files using require.
  module.exports = animal;