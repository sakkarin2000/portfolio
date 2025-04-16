export interface ICareerExperience {
  role: string;
  company: string;
  description: string;
  startDate: string; // ISO format e.g. '2021-05-01'
  endDate?: string; // Optional; if undefined => still working
}
