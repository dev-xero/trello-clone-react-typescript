import React from 'react'
import { useState } from 'react'
import { NewItemFormContainer, NewItemButton, NewItemInput } from '../styles';

interface NewItemFormProps {
  onAdd(text: string): void
}

export const NewItemForm = ({ onAdd }: NewItemFormProps) => {
  const [text, setText] = useState('')
  return (
    <NewItemFormContainer>
			<NewItemInput value={text} onChange={ev => setText(ev.target.value)} />
			<NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
    </NewItemFormContainer>
  )
}
