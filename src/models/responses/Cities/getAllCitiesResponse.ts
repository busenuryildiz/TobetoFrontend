import { GetAllDistrictResponse } from "../District/getAllDistrictResponse";

export interface GetAllCitiesResponse{
    id: number;
    countryId: number;
    name: string;
    districts: GetAllDistrictResponse[];
}