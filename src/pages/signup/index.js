import { useEffect } from 'react';
import Link from 'next/link';
import { signIn, useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import axios from 'axios';
import styles from '../../styles/SignupPage.module.scss'

export default function SignupPage() {

  const { data: session } = useSession();
  const router = useRouter();
  const { redirect } = router.query;

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || '/');
    }
  }, [router, session, redirect]);

  const { handleSubmit, register, getValues, formState: { errors } } = useForm();

  const submitHandler = async (data) => {
    
    try {
    
        await axios.post('/api/auth/signup', {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password,
        });
        
        const result = await signIn('credentials', {
            redirect: false,
            email: data.email,
            password: data.password,
        });

        /* if (result.error) {
        
        toast.error(result.error);
        
      } */
      
    } catch (err) {
      /* toast.error(getError(err)); */
    }
  };

  return (
    <div className={styles.signupPage}>
      <div className={styles.formContainer}>
        <h2 className="">Sign up</h2>
        <p>Please, fill the form below to get an account.</p>
        <form
          className={styles.form}
          onSubmit={handleSubmit(submitHandler)}
        >
          {/** First name */}
          <div className="">
            <input
              {
                  ...register('firstName', {
                      required: 'Enter your first name',
                      pattern: { value: /^[a-zA-Z_.+-]+$/i, message: 'Please enter only letters'},
                  })
              }
              type="text"
              className=""
              placeholder='Enter your first name'
              autoFocus
            />
            {errors.firstName && ( <small className="">{errors.firstName.message}</small> )}

          </div>

          {/** Last name */}
          <div className="">
            <input
              {
                  ...register('lastName', {
                      required: 'Enter your last name',
                      pattern: {
                          value: /^[a-zA-Z_.+-]+$/i,
                          message: 'Please enter only letters',
                      },
                  })
              }
              type="text"
              className=""
              placeholder='Enter your last name'
              autoFocus
            />
            {errors.lastName && ( <small className="">{errors.lastName.message}</small> )}

          </div>
          
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
              placeholder='Enter an email'
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
              placeholder='Enter a password'
            />
            {errors.password && (
              <small className="">{errors.password.message}</small>
            )}
          </div>

          {/** Confirm Password */}
          <div className="">
            <input
              {...register('confirmPassword', { required: 'Please confirm password', validate: v => v === getValues('password') })}
              type="password"
              className=""
              id="confirmPassword"
              placeholder='Confirm your password'
            />
            {errors.password && (
              <small className="">{errors.password.message}</small>
            )}
          </div>

          
          <button className="">Sign up</button>
          

        </form>
        <p>Already have an account?</p>
        <Link href='/login'>Sign in here</Link>
      </div>
      
    </div>
  );
}