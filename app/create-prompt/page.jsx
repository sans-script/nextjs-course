'use client'

import React from 'react'
import {useState} from 'react'
import {useSession} from 'react'
import {useRouter} from 'react'

import Form from '@components/Form'

const CreatePrompt = () => {
  const [submitting, setSubmitting] = useState(false)
  const [post, setPost] = useState({
    prompt: '',
    tag: '',
  })

  const createPrompt = async (e) =>{
    e.preventDefault()
    setSubmitting(true)

    try {

    }catch{
      
    }
  }


  return (
    <Form
    type='Create'
    post={post}
    setPost={setPost}
    submitting={submitting}
    handleSubmit={createPrompt}
    />
  )
}

export default CreatePrompt