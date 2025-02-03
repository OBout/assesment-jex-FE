import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-job-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule],
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.scss'],
})
export class JobFormComponent {
  jobForm: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.jobForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      company: ['', Validators.required],
    });
  }

  submitForm() {
    if (this.jobForm.valid) {
      this.apiService.createJob(this.jobForm.value).subscribe({
        next: () => {
          this.successMessage = 'Vacature aangemaakt, thanks';
          this.jobForm.reset();
        },
        error: () => {
          this.errorMessage = 'Dit ging niet zo goed.';
        },
      });
    }
  }
}
