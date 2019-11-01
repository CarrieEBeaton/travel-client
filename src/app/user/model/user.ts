import { Country } from '../../country/model/country';


export interface User {
    userId: number;
    firstName: string;
    lastName: string;
    email: string;
    country: Country;
}