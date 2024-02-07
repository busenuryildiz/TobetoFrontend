import { GetAllCitiesResponse } from "../Cities/getAllCitiesResponse";

export interface GetAllCountriesResponse{
    id: number;
    name: string;
    cities: GetAllCitiesResponse[];
}