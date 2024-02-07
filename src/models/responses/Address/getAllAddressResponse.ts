export interface GetAllAddressResponse{
    id: number;
    userId: string; 
    districtId?: number | null;
    name?: string | null;
    description?: string | null;
}