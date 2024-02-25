export interface UpdateUserExperiencesRequest {
    id: number; // Id may be optional if you want to handle both adding and editing
    userId: string;
    establishmentName: string;
    position: string;
    sector: string;
    city: string;
    workBeginDate: Date;
    workEndDate: Date;
    description: string;
}