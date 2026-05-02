import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResumeResponse } from '../models/resume-response';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  private apiUrl = 'http://127.0.0.1:8000/resume';

  constructor(private http: HttpClient) {}

  uploadResume(resumeFile: File, jobDescriptionFile?: File): Observable<ResumeResponse> {

    const formData = new FormData();

    // required field
    formData.append('file', resumeFile);

    // optional field
    if (jobDescriptionFile) {
      formData.append('job_description', jobDescriptionFile);
    }

    return this.http.post(`${this.apiUrl}/upload`, formData);
  }

  /**
   * Flatten all technical skill tags from the parsed resume.
   */
  getAllSkillTags(result: any): string[] {
    const tech = result?.parsed_resume?.technical_skills || {};
    const values: string[] = [];
    Object.keys(tech).forEach((key) => {
      const group = tech[key];
      if (Array.isArray(group)) {
        group.forEach((item) => values.push(item));
      }
    });
    return values;
  }

  /**
   * Return skill groups as label/items pairs for sectioned display.
   */
  getSkillGroups(result: any): Array<{ label: string; items: string[] }> {
    const tech = result?.parsed_resume?.technical_skills || {};
    return Object.keys(tech)
      .map((key) => ({
        label: key.replace(/([A-Z])/g, ' $1').trim(),
        items: Array.isArray(tech[key]) ? tech[key] : []
      }))
      .filter((g) => g.items.length);
  }

}
