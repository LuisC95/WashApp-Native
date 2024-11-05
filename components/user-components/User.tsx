import { Memberships } from "../memberships-components/membershipGlobalObject";

class User extends Memberships
{
    firstName: string;
    lastName: string;
    phoneNumber: number;
    email: string;
    carBrand: string;
    carModel: string;
    carYear: number
    
    constructor
    (
      firstName: string,
      lastName: string,
      phoneNumber: number,
      email: string,
      carBrand: string,
      carModel: string,
      carYear: number,      
      code: number,
      level: number,
      price: number,
      interiorConfirmation: boolean,
      service: string,
    )
        {
          super(code, level, price, interiorConfirmation, service);
            this.firstName = firstName;
            this.lastName = lastName;
            this.phoneNumber = phoneNumber;
            this.email = email;
            this.carBrand = carBrand;
            this.carModel = carModel;   
            this.carYear = carYear;
            
        }
}