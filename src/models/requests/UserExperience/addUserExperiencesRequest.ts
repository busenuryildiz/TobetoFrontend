export interface AddUserExperiencesRequest{
  userId: string;
  establishmentName: string;
  position: string;
  sector: string;
  city: string;
  workBeginDate: Date;
  workEndDate: Date;
  description: string;
}