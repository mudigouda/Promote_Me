'use client';
import {useEffect} from 'react';import {useRouter} from 'next/navigation';import Home from '../page';
export default function Dashboard(){const router=useRouter();useEffect(()=>{if(!localStorage.getItem('promote_me_session'))router.replace('/login')},[router]);return <Home/>}