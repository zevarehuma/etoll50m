import * as React from 'react'
export const Accordion=({children}:{children:React.ReactNode})=><div className='space-y-3'>{children}</div>
export const AccordionItem=({children}:{children:React.ReactNode})=><details className='glass px-4 py-3 [&_summary]:cursor-pointer'>{children}</details>
export const AccordionTrigger=({children}:{children:React.ReactNode})=><summary className='text-base font-medium'>{children}</summary>
export const AccordionContent=({children}:{children:React.ReactNode})=><div className='mt-2 text-sm text-slate-300'>{children}</div>