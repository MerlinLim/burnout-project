export interface IMemberCard {
    memberData: IMemberData[];
  }
  
export interface IMemberData {
    id: string;
    name: string;
    imgSrc?: string;
    description?: string;
}

export interface IQuestionnaireData {
    sections: ISection[];
}

export interface ISection {
    title: string;
    description: string;
    questions: IQuestion[];
}

export interface IQuestion {
    itemId: number;
    questionText: string;
}

export interface ResponseType {
    questionNum: number;
    answer: string;
}

export interface ISessionSummaryData {
    id: string;
    title: string;
    date: string;
    done: boolean;
    score: number;
}
  