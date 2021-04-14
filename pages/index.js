import Head from 'next/head'
import { useState } from 'react'
import { hours } from '../data'
import Link from 'next/link'

export default function Home() {
  // function formHandler(event){
  //   event.preventDefault();
    
  //   const formData = new FormData(event.target)
  //   const cookieStand = JSON.stringify(Object.fromEntries(formData))
  //   setCookieStand(cookieStand);
  // }
  
  // const [cookieStand, setCookieStand] = useState("No Cookie Stands Available")
  
  
  
  const [reports, setReports] = useState([]);

  function onCreate(event){
    event.preventDefault();
    
    const report = {
      location: event.target.location.value,
      hourly_sales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36],
      hourlyTotal: 516,
      reportLength: reports.length,
    }
    
    setReports([...reports, report])
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
      <ReportTable hours_arr={hours} reportTableArray={reports} />
      </main>
      
      <Footer reportTableArray={reports}/>
    </div>
  )

  function Header(props){
    return(
      <header className="flex p-4 bg-green-500">
      <h1 className="text-4xl">{props.title}</h1>
      <nav>
        <Link href='/overview'>
          <a className="float-right pl-1 pr-1 mt-3 mx-50 text-md ">Overview</a>
        </Link>
      </nav>
      </header>
    )
  }

  function CreateForm(props){
    return(
    <form name="formData" onSubmit={onCreate} className="p-3 mx-40 my-10 bg-green-300 rounded-md">
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
      <p>{props.reportTableArray.length} Locations World Wide</p>
      </footer>
    )
  }
  

  function ReportTable(props){
    const noCookieStands = props.reportTableArray.length;
    if (noCookieStands == 0) {
      return(
        <h2 className="my-8 text-2xl text-center">No Cookie Stands Available</h2>
      )
    }
    return(
      <table className="w-1/2 mx-auto my-8 bg-green-500 rounded-md">
        <thead>
          <tr>
            <th>Location</th>
            {props.hours_arr.map(hour =>(
              <th>{hour}</th>
            ))}
            <th>Totals</th>
          </tr>
        </thead>
        <tbody>
          {props.reportTableArray.map(data =>(
            <tr className="odd:bg-green-400">
              <td className="pl-2 border border-gray-700">{data.location}</td>
              {data.hourly_sales.map(sale =>(
                <td className="pl-2 border border-gray-700">{sale}</td>
              ))}
              <td className="pl-2 border border-gray-700">{data.hourlyTotal}</td>
            </tr>
          ))}
            
            
        </tbody>
        
      </table>
      // <p className="my-8 text-2xl text-center">{cookieStand}</p>
      // <p>{props.hours_arr}</p>
    )
  }
}
