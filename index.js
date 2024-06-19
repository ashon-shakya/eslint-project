function SayHello (name) {
  if (name) {
    console.log("Hello " + name);
  } else {
    console.log("No Name");
  }
}

SayHello("Alice");
SayHello();