export interface GetUserLanguageAndLevelResponse {
    from: number;
    index: number;
    size: number;
    count: number;
    pages: number;
    items: LanguageItem[];
    hasPrevious: boolean;
    hasNext: boolean;
  }
  
  export interface LanguageItem {
    id: number;
    languageName: string;
    languageLevelName: string;
  }
  