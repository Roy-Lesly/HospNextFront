import MyButton from '@/Components/Designs/MyButton';
import { Divider, Carousel, Row, Col, Button, Image } from 'antd';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import ReactiveButton from 'reactive-button';
import Card from '../Components/Designs/Card';
import { services } from '../Constants/landingConst'


export default function Home() {
  const [random, setRandom] = useState<number>();


  return (
    <div className="bg-gray-100 h-full">
      <Head>
        <title>Health Hub</title>
        <meta name="description" content="A landing page for my business." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-7xl mx-auto py-6 bg-black sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white mb-4 text-center">Welcome to HEALTH HUB</h1>
        <p className="text-xl text-white-900 mb-8 text-center">We offer a range of services to help better Your Health.</p>

        <div className=''>
          <Row>
            <Col span={20}>
              <Carousel autoplay>
                <div><h3 className='text-4xl text-white text-center h-24 bg-slate-600'>1</h3></div>
                <div>
                  <Image
                  width={200}
                  height={200}
                  src={`https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${random}`}
                  />
                </div>
              </Carousel>
            </Col>
            <Col span={4} className='text-center'>
              {/* <p><MyButton title='Get Started' onClickHandler={() => { console.log("CLICJECLICKED GET STARTEDD") }} /></p> */}
              <Link href="/login">
                <div className="newLoginButton">
                  <ReactiveButton className='bg-green-900 font-bold'
                    idleText="GET STARTED"
                    rounded
                  // style={{background: "blue"}}
                  // onClick={createCanalForm}
                  />
                </div>
              </Link>
            </Col>
          </Row>

        </div>

        <Divider className='bg-gray-900' ><code className='text-2xl font-bold text-white'>SERVICES</code></Divider>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <Card
              key={service.title}
              title={service.title}
              description={service.description}
              popContent={service.popContent}
              icon={service.icon}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
