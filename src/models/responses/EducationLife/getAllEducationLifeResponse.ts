export interface GetAllEducationLifeResponse {
    id: number;
    userId: string;
    status?: string | null;
    university?: string | null;
    faculty?: string | null;
    beginningYear?: Date | null;
    graduationYear?: Date | null;
    isContinue?: boolean | null;
}