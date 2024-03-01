export interface GetAllLanguageLevelResponse {
    items: LanguageLevelItem[]; 
    count: number;
    from: number;
    hasNext: boolean;
    hasPrevious: boolean;
    index: number;
    pages: number;
    size: number;
  }



  export interface LanguageLevelItem {
    id: number;
    name: string;
  }