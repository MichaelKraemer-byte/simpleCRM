export class User {
    id?: string; 
    firstName: string;
    surName: string;
    email: string;
    birthDate?: number;
    street: string;
    zipCode: number;
    city: string;

    constructor(obj?: any) {
        this.id = obj ? obj.id : '';
        this.firstName = obj ? obj.firstName : '';
        this.surName = obj ? obj.surName : '';
        this.email = obj ? obj.email : '';
        this.birthDate = obj ? obj.birthDate : 0;
        this.street = obj ? obj.street : '';
        this.zipCode = obj ? obj.zipCode : 0;
        this.city = obj ? obj.city : '';
    }

    public toJSON(){
        return {
            id: this.id,
            firstName: this.firstName,
            surName: this.surName,
            email: this.email,
            birthDate: this.birthDate,
            street: this.street,
            zipCode: this.zipCode,
            city: this.city
        }
    }
}

