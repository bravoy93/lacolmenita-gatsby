import React from 'react'
import {kidAsking} from './KidAsking'

const ILLUSTRATIONS = {
  kidAsking,
}

export default function ColmeIllustration({illustration}) {
  return <>{ILLUSTRATIONS[illustration]}</>
}