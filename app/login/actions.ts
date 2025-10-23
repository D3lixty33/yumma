'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/lib/supabase/server'
import { cookies } from 'next/headers'


{/*
  --SSR LOGIN Form  
*/} 

type LoginDataType = {
  email: string
  password: string
}

export async function login(formData: FormData) {
  const cookieStore = cookies()
  const supabase = await createClient(cookieStore)

  const data: LoginDataType = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  // Step 1 — Try to sign in
  const { data: signInData, error } = await supabase.auth.signInWithPassword(data)

  // Step 2 — Handle errors
  if (error) {
    console.error('Login error:', error)
    redirect('/error')
  }

  // Step 3 — Check if the user exists
  const { data: userData } = await supabase.auth.getUser()

  if (!userData?.user) {
    // no user found, redirect or throw
    console.error('No user found after sign-in')
    redirect('/error')
  }

  // Step 4 — If user exists, revalidate and redirect
  revalidatePath('/dashboard', 'page')
  redirect('/dashboard')
}


//------//


{/*
  --SSR SIGNUP Form  
*/} 

type SignUpDataType = {
  email : string;
  password : string
  name : string
}

export async function signup(formData: FormData) {
  const cookieStore = cookies()
  const supabase = await createClient(cookieStore)

  const data: SignUpDataType = {
    email:    formData.get('email') as string,
    password: formData.get('password') as string,
    name:     formData.get('name') as string 
  }

  // Check if user already exists
  const { data : userValidate} = await supabase.auth.getUser()

  if (userValidate.user){
    console.log('User already exists')
    redirect('/error')
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/dashboard', 'layout')
  redirect('/dashboard')
}