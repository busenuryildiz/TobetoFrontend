import UserLanguageResponse from "./UserLanguageResponse";

interface UserLanguagesBackendResponse {
    from: number;
    index: number;
    size: number;
    count: number;
    pages: number;
    items: UserLanguageResponse[];
    hasPrevious: boolean;
    hasNext: boolean;
  }

  export default UserLanguagesBackendResponse;