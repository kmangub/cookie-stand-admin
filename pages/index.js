import Head from 'next/head'
import { useState } from 'react'
import { hours } from '../data'
import Link from 'next/link'

export default function Home() {
  
  const [cookieStand, setCookieStand] = useState("No Cookie Stands Available")
  
  const hours_array = hours
  
  function formHandler(event){
    event.preventDefault();
    
    const formData = new FormData(event.target)
    const cookieStand = JSON.stringify(Object.fromEntries(formData))
    setCookieStand(cookieStand);

  }

  

  return (
    <div className="">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header title="Cookie Stand Admin"/>

      <main className="">
      <CreateForm />
      <ReportTable cookieStand={cookieStand} hours_arr={hours_array} />
      </main>
      
      <Footer />
    </div>
  )

  function Header(props){
    return(
      <header className="flex p-4 bg-green-500">
      <h1 className="text-4xl">{props.title}</h1>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3">
        <Link href='/overview'>
          <a>Overview</a>
        </Link>
      </nav>
      </header>
    )
  }

  function CreateForm(props){
    return(
    <form name="formData" onSubmit={formHandler} className="p-3 mx-40 my-10 bg-green-300 rounded-md">
          <legend className="text-2xl text-center">Create Cookie Stand</legend>
          
          <div className="ml-8">
          <label>Location</label>
          <input name="location" className="w-4/5 mx-1"></input>
          </div>

          <br />
          
          <div class="flex flex-row">

          <div>
          <label className="text-sm">Minimum Customers per Hour</label>
          <input name="minCustomers" className="pl-1 "></input>
          </div>
          
          <div>
          <label className="text-sm">Maximum Customers per Hour</label>
          <input name="maxCustomers" className="pl-1"></input>
          </div>

          <div>
          <label className="text-sm">Average Cookies per Sale</label>
          <input name="avgCookies" className="pl-1"></input>
          </div>
          
          <div>
          <button className="px-20 py-3 m-2 bg-green-500">Create</button>
          </div>
          
          </div>

        </form>
    )
  }

  function Footer(props){
    return(
      <footer className="flex p-4 bg-green-500">
      <p>&copy; 2021</p>
      </footer>
    )
  }

  function ReportTable(props){
    return(
      <div>
      <p className="my-8 text-2xl text-center">{cookieStand}</p>
      <p>{props.hours_arr}</p>
      </div>
    )
  }
}
