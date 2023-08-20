export class Dog {
  name: string;
  gender: "Boy" | "Girl";
  birthday: Date;
  breed: string;
  ownerID: string;

  constructor() {
    this.name = "";
    this.gender = "Boy";
    this.birthday = new Date();
    this.breed = "";
    this.ownerID = "";
  }
}
