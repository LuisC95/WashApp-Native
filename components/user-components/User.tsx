import { Memberships } from "../memberships-components/membershipGlobalObject";

export class User extends Memberships
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

export const defUser = new User
(
  'Name', 
  'LastName', 
  12345678900, 
  'youremail@email.com', 
  'Toyota', 
  'Camry', 
  2020, 
  70142803526, 
  1, 
  24.99, 
  false, 
  'Exterior wheels and shine'
);