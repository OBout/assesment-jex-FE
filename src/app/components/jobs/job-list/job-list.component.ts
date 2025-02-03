import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-job-list',
  standalone: true,
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss'],
  imports: [CommonModule, MatTableModule, MatProgressSpinnerModule]
})
export class JobListComponent implements OnInit {
  jobs: any[] = [];
  displayedColumns: string[] = ['title', 'description', 'company'];
  loading = true;
  errorMessage: string | null = null;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    console.log('JobListComponent initialized');
    this.apiService.getJobs().subscribe({
      next: (response: any) => {
        this.jobs = response.data;
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = 'Fout bij ophalen vacatures.';
        this.loading = false;
      }
    });
  }
}
