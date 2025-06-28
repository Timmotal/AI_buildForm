import React from 'react'
import { auth, signIn, signOut } from "@/auth";
import { Button } from './button';
import Image from 'next/image';
import Link from 'next/link';

type Props = {}

function SignOut() {
  return (
    <form action={async () => {
      'use server';
      await signOut()
    }}>
      <Button type="submit">Sign out</Button>
    </form>
  )
}
const Header = async (props: Props) => {
  const session = await auth();

  return (
    <header className=''>
      <div className=''><h1>AI Form Builder</h1><div>
        {
          session?.user ? (
            <div className="flex items-center gap-4">
             
              {session.user.name && session.user.image &&
                <Image
                  src={session.user.image}
                  alt={session.user.name}
                  width={32}
                  height={32}
                  className='rounded-full' />
              }
        
            </div>
          ) : (

          )
        }</div></div>
    </nav></header>
  )
}

export default Header