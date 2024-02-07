export interface AddAddressRequest{
    userId?: string;
    districtId?: number | null;
    cityId?: number | null;
    countryId?: number | null;
    name?: string | null;
    description?: string | null;
}