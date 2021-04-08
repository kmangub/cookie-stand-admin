import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  
  const [cookieStand, setCookieStand] = useState("")

  function formHandler(event){
    event.preventDefault();
    
    const formData = new FormData(event.target)
    const cookieStand = JSON.stringify(Object.fromEntries(formData))
    setCookieStand(cookieStand);
    // alert(event.target.location.value)
    // alert(event.target.min.value)
    // alert(event.target.max.value)
    // alert(event.target.average.value)

  }

  return (
    <div className="">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex p-4 bg-green-500">
        <h1 className="text-4xl">Cookie Stand Admin</h1>
      </header>

      <main className="">
        
        <form name="formData" onSubmit={formHandler} className="p-3 mx-40 my-10 bg-green-300 rounded-md">
          <legend className="text-2xl text-center">Create Cookie Stand</legend>
          
          <label>Location</label>
          <input name="location" className="mx-1"></input> 
          <br />
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

        <p className="text-center text-md">Report Table Coming Soon...</p>

        <p className="my-4 text-center">{cookieStand}</p>
      
      </main>

      <footer className="flex p-4 bg-green-500">
        <p>&copy; 2021</p>
      </footer>
    </div>
  )
}
