import React from 'react'
import Movies from 'src/app/components/movies/movies'
import TabBar from 'src/app/components/tabBar/tabBar'
import ViewOptions from 'src/app/components/viewOptions/viewOptions'
import './style.scss'

export default function Home(props: any) {
  return (
    <>
      <div className='toolbar'>
        <TabBar></TabBar>
        <ViewOptions></ViewOptions>
      </div>

      <Movies></Movies>
    </>
  )
}
