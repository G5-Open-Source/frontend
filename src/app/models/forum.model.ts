export interface Forum {
  id: string;
  name: string;
  description?: string;
  type: 'main' | 'sub';
  order: number;
}
