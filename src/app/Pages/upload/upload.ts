import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material/material-module';
import { ResumeService } from '../../shared/services/resume.service';
import { ResumeResponse } from '../../shared/models/resume-response';

@Component({
  selector: 'app-upload',
  imports: [MaterialModule, ReactiveFormsModule],
  templateUrl: './upload.html',
  styleUrl: './upload.css',
})
export class Upload {
  resumeFile: File | null = null;
  jdFile: File | null = null;
  result: ResumeResponse | null = null;
  view = {
    name: 'N/A',
    summary: 'N/A',
    phone: 'N/A',
    email: 'N/A',
    location: 'N/A',
    role: 'N/A',
    matchScore: 'N/A',
    education: [] as NonNullable<ResumeResponse['parsed_resume']>['education'],
    experience: [] as NonNullable<ResumeResponse['parsed_resume']>['experience'],
    skills: {} as NonNullable<ResumeResponse['parsed_resume']>['technical_skills'],
  };
  uploadError: string | null = null;
  uploading = false;

  constructor(private resumeService: ResumeService) {}

  onResumeSelected(event: any) {
    this.resumeFile = event.target.files[0] ?? null;
  }

  onJdSelected(event: any) {
    this.jdFile = event.target.files[0] ?? null;
  }

  uploadResume() {
    if (!this.resumeFile) {
      this.uploadError = 'Please select a resume file.';
      return;
    }

    this.uploading = true;
    this.uploadError = null;
    this.result = null;

    this.resumeService.uploadResume(this.resumeFile, this.jdFile || undefined).subscribe({
      next: (res) => {
        this.result = res;
        const pr = res?.parsed_resume;
        this.view = {
          name: pr?.name ?? 'N/A',
          summary: pr?.summary ?? 'N/A',
          phone: pr?.phone ?? 'N/A',
          email: pr?.email ?? 'N/A',
          location: pr?.location ?? 'N/A',
          role: pr?.experience?.[0]?.role ?? 'N/A',
          matchScore: this.getMatchScoreLabel(),
          education: pr?.education ?? [],
          experience: pr?.experience ?? [],
          skills: pr?.technical_skills ?? {},
        };
        this.uploading = false;
      },
      error: (err) => {
        this.uploading = false;
        this.uploadError = err?.message || 'Upload failed. Please try again.';
      },
    });
  }

  reset() {
    this.resumeFile = null;
    this.jdFile = null;
    this.result = null;
    this.uploadError = null;
    this.uploading = false;
  }

  getMatchScore(): number {
    const score =
      this.result?.experience_matching?.overall_match ??
      this.result?.match_score ??
      this.result?.job_match?.overall_match ??
      0;
    return Number(score) || 0;
  }

  getMatchScoreValue(): number | null {
    const score =
      this.result?.experience_matching?.overall_match ??
      this.result?.match_score ??
      this.result?.job_match?.overall_match;
    const num = Number(score);
    return Number.isFinite(num) && num > 0 ? num : null;
  }

  getMatchScoreLabel(): string {
    const value = this.getMatchScoreValue();
    return value === null ? 'N/A' : `${value}%`;
  }

  getStabilityLabel(): string {
    return this.result?.stability_report?.overall_stability || 'N/A';
  }

  getMatchedSkills(): string[] {
    if (!this.result?.experience_matching) return [];
    return this.result.experience_matching.matched_skills || [];
  }

  getMissingSkills(): string[] {
    if (!this.result?.experience_matching) return [];
    return this.result.experience_matching.missing_skills || [];
  }

  getAllSkillTags(): string[] {
    return this.resumeService.getAllSkillTags(this.result);
  }

  getSkillGroups(): Array<{ label: string; items: string[] }> {
    return this.resumeService.getSkillGroups(this.result);
  }

  valueOrNA(value: any): string {
    if (value === null || value === undefined) return 'N/A';
    if (typeof value === 'string' && value.trim() === '') return 'N/A';
    return String(value);
  }

  listOrNA(list: any[]): string[] | null {
    if (!Array.isArray(list) || list.length === 0) return null;
    return list;
  }

  getRatingClass(rating: string | null | undefined): string {
    const value = (rating || '').toLowerCase();
    if (value.includes('very weak')) return 'soft-danger';
    if (value.includes('weak')) return 'soft orange';
    if (value.includes('strong')) return 'soft green';
    return 'soft';
  }

  getStabilityClass(label: string | null | undefined): string {
    const value = (label || '').toLowerCase();
    if (value.includes('very weak')) return 'soft-danger';
    if (value.includes('weak')) return 'soft orange';
    if (value.includes('strong')) return 'soft green';
    return 'soft';
  }
}
