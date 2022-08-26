import { Model, ModelObject } from 'objection';
import { Blog } from '@/interfaces/posts.interface';

export class Posts extends Model implements Blog {
  id!: number;
  title!: string;
  summary!: string;
  body!:string;
  date!:string;
  author_id!:number;

  static tableName = 'posts'; // database table name
  static idColumn = 'id'; // id column name
}

export type PostsShape = ModelObject<Posts>;
