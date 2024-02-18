export interface UpdatedUserAllInformationResponse {
    userId: string;
    firstName?: string | null;
    lastName?: string | null;
    email?: string | null;
    imagePath?: string | null;
    nationalIdentity?: string | null;
    birthDate?: Date | null;
    phoneNumber?: string | null;
    districtName?: string | null;
    cityName?: string | null;
    countryName?: string | null;
    addressName?: string | null;
    description?: string | null;
}