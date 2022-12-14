import { CreatePostDto } from '@dtos/posts.dto';
import { Posts } from '@models/posts.model';
import { hash } from 'bcrypt';
import { HttpException } from '@exceptions/HttpException';
import { User } from '@interfaces/users.interface';
import { Post } from '@/interfaces/posts.interface';
import { isEmpty } from '@utils/util';


class PostsService {
  public async findAllPost(): Promise<Post[]> {
    const posts: Post[] = await Posts.query().select().from('posts');
    return posts;
  }

  public async findPostById(postId: number): Promise<Post> {
    const findPost: Post = await Posts.query().findById(postId);
    if (!findPost) throw new HttpException(409, "User doesn't exist");

    return findPost;
  }

  public async createPost(postData: CreatePostDto): Promise<Post> {
    if (isEmpty(postData)) throw new HttpException(400, 'postData is empty');

    const findPost: Post = await Posts.query().select().from('posts').where('title', '=', postData.title).first();
    if (findPost) throw new HttpException(409, `This email ${postData.title} already exists`);

    const createPostData: Post = await Posts.query()
      .insert({ postData })
      .into('posts');

    return createUserData;
  }

  public async updateUser(userId: number, userData: Post): Promise<Post> {
    if (isEmpty(userData)) throw new HttpException(400, 'userData is empty');

    const findUser: User[] = await Posts.query().select().from('users').where('id', '=', userId);
    if (!findUser) throw new HttpException(409, "User doesn't exist");

    const hashedPassword = await hash(userData.password, 10);
    await Posts.query()
      .update({ ...userData, password: hashedPassword })
      .where('id', '=', userId)
      .into('users');

    const updateUserData: User = await Posts.query().select().from('users').where('id', '=', userId).first();
    return updateUserData;
  }

  public async deleteUser(userId: number): Promise<Post> {
    const findUser: User = await Posts.query().select().from('users').where('id', '=', userId).first();
    if (!findUser) throw new HttpException(409, "User doesn't exist");

    await Posts.query().delete().where('id', '=', userId).into('users');
    return findUser;
  }
}

export default PostsService;