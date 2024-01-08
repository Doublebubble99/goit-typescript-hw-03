class Key {
  private signature: number = Math.floor(Math.random() * (10 - 1) + 1);
  getSignature(): number {
    return this.signature;
  }
}
class Person {
  constructor(private key: Key) {}
  getKey() {
    return this.key.getSignature();
  }
}
abstract class House {
  door: "open" | "close";
  key: Key | number = 5;
  comeIn(person: Person) {
    let tenants: Person[] = [];
    if (this.door === "open") {
      tenants.push(person);
      console.log(tenants);
    }
  }
  abstract openDoor(key: Key): void;
}
class MyHouse extends House {
  openDoor(key: Key): void {
    if (this.key === key.getSignature()) {
      this.door = "open";
      return;
    }
    this.door = "close";
  }
}
const key = new Key();
const person = new Person(key);
const house = new MyHouse();
house.openDoor(key);
house.comeIn(person);
console.log(person);

export {};
