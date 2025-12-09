import { Memberships } from "../memberships-components/membershipGlobalObject";

/**
 * Clase User que extiende de Memberships
 * Representa un usuario del sistema con información personal y datos de su vehículo
 */
export class User extends Memberships
{
    // Información personal del usuario
    firstName: string;          // Nombre del usuario
    lastName: string;           // Apellido del usuario
    phoneNumber: number;        // Número de teléfono de contacto
    email: string;              // Correo electrónico del usuario
    
    // Información del vehículo del usuario
    carBrand: string;           // Marca del vehículo (ej: Toyota, Ford, BMW)
    carModel: string;           // Modelo del vehículo (ej: Camry, Mustang)
    carYear: number;            // Año de fabricación del vehículo
    
    /**
     * Constructor de la clase User
     * Inicializa un nuevo usuario con sus datos personales, de vehículo y membresía
     * 
     * @param firstName - Nombre del usuario
     * @param lastName - Apellido del usuario
     * @param phoneNumber - Número de teléfono de contacto
     * @param email - Correo electrónico del usuario
     * @param carBrand - Marca del vehículo
     * @param carModel - Modelo del vehículo
     * @param carYear - Año del vehículo
     * @param code - Código único de la membresía (heredado de Memberships)
     * @param level - Nivel de membresía (heredado de Memberships)
     * @param price - Precio de la membresía (heredado de Memberships)
     * @param interiorConfirmation - Si se confirmó el servicio interior (heredado de Memberships)
     * @param service - Tipo de servicio de membresía (heredado de Memberships)
     * @param estimatedFinishTime - Tiempo estimado de finalización del servicio
     */
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
      estimatedFinishTime: string
    )
        {
          // Llamar al constructor padre (Memberships) con parámetros de membresía
          super(code, level, price, interiorConfirmation, service);
          
          // Inicializar propiedades personales del usuario
            this.firstName = firstName;
            this.lastName = lastName;
            this.phoneNumber = phoneNumber;
            this.email = email;
            
            // Inicializar propiedades del vehículo
            this.carBrand = carBrand;
            this.carModel = carModel;   
            this.carYear = carYear;
        }
}

/**
 * Objeto de usuario por defecto utilizado para pruebas y datos iniciales
 * Contiene datos de ejemplo de un usuario con membresía activa
 */
export const defUser = new User
(
  'Name',                                   // Nombre: Name
  'LastName',                               // Apellido: LastName
  12345678900,                              // Teléfono: 12345678900
  'youremail@email.com',                    // Email: youremail@email.com
  'Toyota',                                 // Marca del vehículo: Toyota
  'Camry',                                  // Modelo del vehículo: Camry
  2020,                                     // Año del vehículo: 2020
  70142803526,                              // Código de membresía: 70142803526
  1,                                        // Nivel de membresía: 1 (básico)
  24.99,                                    // Precio de membresía: $24.99
  false,                                    // Interior no confirmado
  'Full Service Manager Special',           // Tipo de servicio especial
  ' 15 minutes',                            // Tiempo estimado: 15 minutos
);