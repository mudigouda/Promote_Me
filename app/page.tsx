'use client';
import {useEffect} from 'react';import {useRouter} from 'next/navigation';
export default function Home(){const router=useRouter();useEffect(()=>{router.replace('/login')},[router]);return <main style={{padding:40,fontFamily:'system-ui'}}>Opening Promote_Me…</main>}