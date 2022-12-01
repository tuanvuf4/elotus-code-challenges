import { Button, Form, Input } from 'antd'
import React, { useState } from 'react'
import './style.scss'

export default function SearchBar(props: any) {
  const [searchText, setSearchText] = useState<string>('')
  return (
    <Form
      name='customized_form_controls'
      layout='inline'
    >
      <Form.Item name='search' label=''>
        <Input
          type='text'
          value={''}
          placeholder='Search the movies...'
          onChange={(e) => setSearchText(e.target.value)}
          style={{ width: 180 }}
        />
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType='submit' onClick={() => {
          console.log('123 ', 123)
        }}>
          Search
        </Button>
      </Form.Item>
    </Form>
  )
}
