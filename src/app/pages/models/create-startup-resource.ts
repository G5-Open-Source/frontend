export interface CreateStartupResource {
  firstName: string;
  lastName: string;
  email: string;
  dni: string;
  password: string;
  age: string;
  userRole: 'STARTUP';
  profession: string;
  StartupName: string;
  description: {
    description: string;
  };
  approach: {
    approach: string;
  };
  hiringStatus: string;
  workers: {
    workersAmmount: number;
  };
}
