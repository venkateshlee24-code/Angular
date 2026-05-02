export interface ResumeMetadata {
  filename?: string;
  file_size_mb?: number;
  page_count?: number;
  text_length?: number;
  uploaded_at?: string;
  analyzed?: boolean;
  job_description_provided?: boolean;
}

export interface EducationItem {
  year?: string;
  degree?: string;
  college_name?: string;
  grade?: string;
}

export interface ExperienceItem {
  company_name?: string;
  role?: string;
  start_date?: string;
  end_date?: string | null;
  achievement?: string[];
  tech_stack?: string[];
  employement_type?: string;
}

export interface ProjectItem {
  name?: string;
  description?: string;
  tech_stack?: string[];
}

export interface TechnicalSkills {
  [category: string]: string[];
}

export interface ParsedResume {
  name?: string;
  phone?: string;
  email?: string;
  location?: string;
  summary?: string;
  education?: EducationItem[];
  experience?: ExperienceItem[];
  projects?: ProjectItem[] | null;
  technical_skills?: TechnicalSkills;
  soft_skills?: string[] | null;
  certification?: string | null;
}

export interface ParsedJD {
  error?: string;
}

export interface StabilityHistoryItem {
  company_name?: string;
  role?: string;
  tenure_human?: string;
  tenure_years?: number;
  stability_rating?: string;
  promotion?: boolean;
}

export interface StabilityReport {
  employment_history?: StabilityHistoryItem[];
  average_tenure_years?: number;
  overall_stability?: string;
  issues?: string[];
}

export interface ResumeResponse {
  filename?: string;
  status?: string;
  message?: string;
  metadata?: ResumeMetadata;
  warnings?: string[];
  parsed_resume?: ParsedResume;
  parsed_jd?: ParsedJD;
  stability_report?: StabilityReport;
  experience_matching?: any;
  match_score?: number;
  job_match?: {
    overall_match?: number;
    matched_skills?: string[];
    missing_skills?: string[];
  };
  job_description_included?: boolean;
  career_summary?: string;
}
