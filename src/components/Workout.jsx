import React from 'react'
import SectionWrapper from './SectionWrapper'

export default function Workout(props) {
  const {workout} = props
  return (
    <SectionWrapper header={"generate your workout"} title={['It\'s', 'Huge','o\'clock']}>
      </SectionWrapper>
  )
}
