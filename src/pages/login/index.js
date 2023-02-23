import Link from 'next/link';
import { useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import styles from '../../styles/LoginPage.module.scss'

export default function LoginPage() {

  const { data: session } = useSession();
  const router = useRouter();
  const { destination } = router.query;
  
  useEffect(() => {

    if (session?.user && destination) {
      router.push({pathname: destination, query: router.query});
    } 

  }, [router, session, destination]);

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
    <div className={styles.loginPage}>
      <div className={styles.formContainer}>
        <h2 className="">Sign in</h2>
        <p>Please, enter your credentials.</p>
        <form
          className={styles.form}
          onSubmit={handleSubmit(submitHandler)}
        >
          
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
              placeholder='Enter your email address'
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
              placeholder='Enter your password'
            />
            {errors.password && (
              <small className="">{errors.password.message}</small>
            )}
          </div>

          <button className={styles.button}>Sign in</button>

        </form>
        <p>Don&apos;t have an account?</p>
        <Link href='/signup'>Sign up here</Link>
      </div>
    </div>
  );
}