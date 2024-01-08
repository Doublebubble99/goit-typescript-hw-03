class Key {
  private signature: number = Math.floor(Math.random() * (10 - 1) + 1);
  getSignature(): number {
    return this.signature;
  }
}
class Person {
  constructor(private key: Key) {}
  getKey(): Key {
    return this.key;
  }
}
abstract class House {
  door: boolean = false;
  constructor(public key: Key, public tenants: Person[]) {}
  comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(person);
      console.log(this.tenants);
    }
  }
  abstract openDoor(key: Key): void;
}
class MyHouse extends House {
  openDoor(key: Key): void {
    if (this.key.getSignature() === key.getSignature()) {
      this.door = true;
      return;
    }
    this.door = false;
  }
}
const key = new Key();
const person = new Person(key);
const house = new MyHouse(key, [person]);
house.openDoor(person.getKey());
house.comeIn(person);
export {};
