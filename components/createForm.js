export default function CreateForm(props){
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