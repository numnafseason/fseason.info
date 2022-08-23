import { IsEmail, IsString } from 'class-validator';

export class CreatePostDto {
    
  @IsString()
  public title: string;
  public summary: string;
  public text:string;
}
