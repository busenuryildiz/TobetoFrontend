export interface GetAllUserExperiencesResponse {
    id: number;
    userId: string;
    establishmentName: string;
    position: string;
    sector: string;
    city: string;
    workBeginDate: Date; 
    workEndDate: Date; 
    description: string;
}