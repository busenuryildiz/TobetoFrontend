export interface AddAddressResponse{
    id: number;
    userId: string; // Assuming Guid is represented as string
    districtId?: number | null;
    name?: string | null;
    description?: string | null;
}