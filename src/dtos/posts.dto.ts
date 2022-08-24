import { IsEmail, IsNumber, IsString } from 'class-validator';

export class CreatePostDto {

  @IsString()
  public title: string;
  public summary: string;
  public body:string;
  
  @IsNumber()
  public author_id:number;
}
