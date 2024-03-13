import { Tag } from 'src/app/models/tag';

export interface Project{
  id: number;
  name: string;
  summary: string;
  description: string;
  projectLink: string;
  pictures: string[];
  tags: Tag[];
}
