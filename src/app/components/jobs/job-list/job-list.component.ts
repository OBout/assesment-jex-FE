import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-job-list',
  standalone: true,
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss'],
  imports: [CommonModule, MatTableModule]
})
export class JobListComponent implements OnInit {
  jobs: any[] = [];
  displayedColumns: string[] = ['title', 'description', 'company'];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getJobs().subscribe({
      next: (data) => (this.jobs = data),
      error: (err) => console.error('Fout bij ophalen vacatures:', err)
    });
  }
}
