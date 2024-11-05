export class Memberships
{
    code: number;
    level: number;
    price: number;
    interiorConfirmation: boolean;
    service: string;

    constructor
    (
        code: number,
        level: number,
        price: number,
        interiorConfirmation: boolean,
        service: string,
    )
    {
        this.code = code;
        this.level = level;
        this.price = price;
        this.interiorConfirmation = interiorConfirmation;
        this.service = service;  
    }
}

const membershipSettings: Memberships[] = 
[
    new Memberships(0, 1, 24.99, false, 'Exterior wheels and shine'),
    new Memberships(0, 2, 34.99, false, 'Exterior Hot Wax and Shine'),
    new Memberships(0, 2, 49.99, true, 'Full Service Hot Wax and Shine'),
    new Memberships(0, 3, 39.99, false,  'Exterior Manager Special'),
    new Memberships(0, 3, 54.99, true,'Full Service Manager Special'),
];