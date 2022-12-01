import { Tabs } from 'antd'
import React, { useState } from 'react'
import Movies from '../movies/movies'
import './style.scss'

export default function TabBar(props: any) {
  return (
    <Tabs>
      <Tabs.TabPane tab='Now Playing' key='item-1'>
      </Tabs.TabPane>
      <Tabs.TabPane tab='Top Rated' key='item-2'>
      </Tabs.TabPane>
    </Tabs>
  )
}
