export interface GetAllLanguageResponse {
    items: LanguageItem[]; 
    count: number;
    from: number;
    hasNext: boolean;
    hasPrevious: boolean;
    index: number;
    pages: number;
    size: number;
  }



  export interface LanguageItem {
    id: number;
    name: string;
  }