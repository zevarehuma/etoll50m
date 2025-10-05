import * as React from 'react'
import { cn } from './utils'
export function Card(p:React.HTMLAttributes<HTMLDivElement>){return <div {...p} className={cn('glass',p.className)}/>}
export const CardHeader=(p:React.HTMLAttributes<HTMLDivElement>)=> <div {...p} className={cn('px-5 pt-5',p.className)}/>
export const CardTitle=(p:React.HTMLAttributes<HTMLHeadingElement>)=> <h3 {...p} className={cn('text-lg font-semibold',p.className)}/>
export const CardContent=(p:React.HTMLAttributes<HTMLDivElement>)=> <div {...p} className={cn('px-5 pb-5',p.className)}/>