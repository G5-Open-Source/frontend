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
    Description: string; // con mayúscula
  };
  approach: {
    Approach: string; // con mayúscula
  };
  hiringStatus: string;
  workers: {
    WorkersAmmount: number; // con mayúscula
  };
}
