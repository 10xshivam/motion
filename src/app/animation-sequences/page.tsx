import AnimationSequence from '@/components/AnimationSequence'
import AnimationText from '@/components/AnimationText'
import React from 'react'

export default function Page() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-black gap-20 flex-col'>
        <AnimationText/>
        <AnimationSequence/>
    </div>
  )
}
