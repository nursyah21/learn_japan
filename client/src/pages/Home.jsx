// import React from 'react'
import { test } from '../lib/test'

export default function Home() {
    return (
        <div className='text-red-500'>
            Home
            <br />
            <button onClick={test} className='btn'>click me</button>
        </div>
    )
}