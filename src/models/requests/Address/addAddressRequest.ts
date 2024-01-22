export interface AddAddressRequest{
    userId?: string; // Assuming Guid? is represented as string
    districtId?: number;
    cityId?: number;
    countryId?: number;
    name?: string | null;
    description?: string | null;
}