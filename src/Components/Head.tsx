import React, {FC, ReactNode} from 'react'
import Head from 'next/head'

const MyHead = ({children}: any) => {
  return (
    <Head>
        <title>{children.title}</title>
        <meta name={children.name} content={children.content} />
        <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default MyHead