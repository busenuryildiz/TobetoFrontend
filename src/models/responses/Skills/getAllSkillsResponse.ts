export interface GetAllSkillsResponse {
    items: SkillItem[]; 
    count: number;
    from: number;
    hasNext: boolean;
    hasPrevious: boolean;
    index: number;
    pages: number;
    size: number;
  }
  
  export interface SkillItem {
    id: number;
    name: string;
  }
  