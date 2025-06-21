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