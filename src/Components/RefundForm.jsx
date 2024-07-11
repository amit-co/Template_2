import { ImCross } from "react-icons/im";
import { useLocation } from "react-router-dom";
export default function RefundForm({setDisplayForm}) {
  const location = useLocation()
  console.log(location.pathname)
  return (
  <div className="relative">
  <form className="py-10 absolute z-10 shadow-lg w-[45vw] overflow-y-scroll h-[70vh] mx-auto border bg-white ">
        <ImCross onClick={()=>setDisplayForm(false)} className="absolute top-3 right-3 text-2xl text-customBlue2 cursor-pointer"/>
      <div className="w-fit mx-auto p-2">
        <h1 className="text-3xl text-customBlue2 font-semibold">
          Refund Request Form
        </h1>
        <div className="h-[2px] bg-customBlue2 "></div>
      </div>
      <div className="flex w-11/12 mt-5 mx-auto items-center justify-between">
        <h1 className="text-lg">Name</h1>
        <div className="space-x-1">
          <input
            type="text"
            className="border hover:shadow-lg py-3 pl-2 pr-6 outline-none"
            placeholder="Franky"
          />
          <input
            type="text"
            className="border hover:shadow-lg py-3 pl-2 pr-6 outline-none"
            placeholder="Rodrigues"
          />
        </div>
      </div>
      <div className="flex w-11/12 mt-5 mx-auto items-center justify-between">
        <h1 className="text-lg">Email</h1>
        <input
          type="email"
          className="border hover:shadow-lg w-8/12 py-3 pl-2 outline-none pr-6"
          placeholder="Example@example.com"
        />
      </div>
      <div className="flex w-11/12 mt-5 mx-auto items-center justify-between">
        <h1 className="text-lg">Request Date</h1>
        <input
          type="date"
          className="border w-8/12 hover:shadow-lg py-3 pl-2 outline-none pr-6"
        />
      </div>
      <div className="flex w-11/12 mt-5 mx-auto items-center justify-between">
        <h1 className="text-lg">Reason For Refund</h1>
        <div className="w-8/12">
          <div className="space-x-3">
            <input type="radio" id="para1" name="reasonForRefund" />
            <label htmlFor="para1">Wrong Item</label>
          </div>
         
          <div className="space-x-3">
            <input type="radio" id="para3" name="reasonForRefund" />
            <label htmlFor="para3">Service issues</label>
          </div>
          <div className="space-x-3">
            <input type="radio" id="para4" name="reasonForRefund" />
            <label htmlFor="para4">Quality issues</label>
          </div>
          <div className="space-x-3">
            <input type="radio" id="para2" name="reasonForRefund"  />
            <label htmlFor="para2">Others</label>
          </div>
        </div>
        
      </div>
      <div className="flex w-11/12 mt-5 mx-auto items-center justify-between">
        <h1 className="text-lg">Requested Amount</h1>
        <input
          type="number"
          className="border w-8/12 py-3 pl-2 outline-none pr-6"
        />
      </div>
      <div className="flex w-11/12 mt-5 mx-auto items-center justify-between">
        <h1 className="text-lg">Additional Notes</h1>
        <textarea name="" rows="5" id="" className="border outline-none w-8/12"></textarea>
      </div>
      <div className="text-center">
      <button className=" px-12 py-2 mt-3 bg-customBlue2 text-white rounded-sm">SUBMIT</button>
      </div>
    </form>
  </div>
    
  );
}
