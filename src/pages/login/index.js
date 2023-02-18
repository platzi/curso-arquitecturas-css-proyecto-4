import { useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

export default function LoginPage() {

  const { data: session } = useSession();
  const router = useRouter();
  const { redirect } = router.query;

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || '/');
    }
  }, [router, session, redirect]);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const submitHandler = async ({ email, password }) => {
    
    try {
      
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      
      /* if (result.error) {
        
        toast.error(result.error);
        
      } */
      
    } catch (err) {
      /* toast.error(getError(err)); */
    }
  };

  return (
    <div>
      <form
        className=""
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className="">Login</h1>
        {/** Email */}
        <div className="">
          <input
            type="email"
            {
                ...register('email', {
                    required: 'Please enter an email',
                    pattern: {
                        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                        message: 'Please enter a valid email',
                    },
                })
            }
            placeholder='Your email'
            className=""
            id="email"
            autoFocus
          />
          {errors.email && (
            <small className="">{errors.email.message}</small>
          )}

        </div>
        
        {/** Password */}
        <div className="">
          <input
            {...register('password', { required: 'Please enter password' })}
            type="password"
            className=""
            id="password"
            placeholder='Your password'
          />
          {errors.password && (
            <small className="">{errors.password.message}</small>
          )}
        </div>

        <div className="">
          <button className="">Login</button>
        </div>

      </form>
      <div>
        Don't have an account? 
      </div>
    </div>
  );
}