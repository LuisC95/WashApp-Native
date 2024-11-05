
class MembershipUser
{
    firstName: string;
    lastName: string;
    phoneNumber: number;
    email: string;
    membershipCode: number;
    membershipType: string;
    serviceActive: boolean;
    currentService: string;
    carBrand: string;
    carModel: string;
    carYear: number
    
    constructor
    (
      firstName: string,
      lastName: string,
      phoneNumber: number,
      email: string,
      membershipCode: number,
      membershipType: string,
      serviceActive: boolean,
      currentService: string,
      carBrand: string,
      carModel: string,
      carYear: number
    )
        {
            this.firstName = firstName;
            this.lastName = lastName;
            this.phoneNumber = phoneNumber;
            this.email = email;
            this.membershipCode = membershipCode;
            this.membershipType = membershipType;
            this.serviceActive = serviceActive;
            this.currentService = currentService;
            this.carBrand = carBrand;
            this.carModel = carModel;   
            this.carYear = carYear;
            
        }
}