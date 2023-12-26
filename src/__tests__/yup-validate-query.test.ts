import { describe, expect, test } from 'vitest';
import { date, number, object, string } from 'yup';

describe('yupでクエリをvalidateする学習テスト', () => {
  test('yupでvalidate', () => {
    let userSchema = object({
      name: string().required(),
    //   age: number().required().positive().integer(),
    //   email: string().email(),
    //   website: string().url().nullable(),
    //   createdOn: date().default(() => new Date()),
    });

    try{

        const user =  userSchema.cast({name: 123,hoge:123});
        console.log({ user })
    }catch(e){
        console.log(e);
    }
    // console.log({ user });

    expect('').toEqual('');
  });
});
