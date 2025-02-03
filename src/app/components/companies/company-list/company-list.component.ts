import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ApiService } from '../../../services/api.service';
import { Company } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-company-list',
  standalone: true,
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
  imports: [CommonModule, MatTableModule, MatProgressSpinnerModule]
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];
  displayedColumns: string[] = ['name', 'address'];
  loading = true;
  errorMessage: string | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    console.log('CompanyListComponent initialized');
    this.apiService.getCompanies().subscribe({
      next: (response: { data: Company[] }) => {
        console.log('Got companies', response);
        this.companies = response.data;
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = 'Fout bij ophalen bedrijven.';
        this.loading = false;
      }
    });
  }
}
