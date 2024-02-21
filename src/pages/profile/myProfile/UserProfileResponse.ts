interface UserProfileResponse {
    userId: string;
    firstName: string ;
    lastName: string ;
    email: string ;
    imagePath?: string | null;
    birthDate?: string | null;
    phoneNumber?: string | null;
    description?: string | null;
  }

  export default UserProfileResponse;