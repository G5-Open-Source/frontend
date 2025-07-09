// src/app/models/create-freelancer-resource.model.ts

import { StudyCertificateCommand } from './study-certificate-command';
import { AveragePayPerHhourCommand } from './average-pay-per-hhour-command';

export interface CreateFreelancerResource {
  firstname: string;
  lastName: string;
  email: string;
  dni: string;
  password: string;
  age: string;
  userRole: 'FREELANCER'; // valor fijo
  profession: string;
  studyCertificates: StudyCertificateCommand[];
  workingStatus: 'AVAILABLE' | 'BUSY' | 'NOT_AVAILABLE' | 'ON_PROJECT';
  averagePayPerHour: AveragePayPerHhourCommand;
}
