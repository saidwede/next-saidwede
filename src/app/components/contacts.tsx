export default function Contacts(){
    return (
        <div className="h-full flex items-center justify-center">
            <form className="w-[500px]">
                <h1 className="text-center font-bold text-xl py-3">Contact</h1>
                <div className="grid grid-cols-2 gap-2">
                    <label >
                        <span className="text-xs">First name</span>
                        <input type="text" className=" border h-10 w-full outline-none px-2 py-1 text-sm" />
                    </label>
                    <label >
                        <span className="text-xs">Last name</span>
                        <input type="text" className=" border h-10 w-full outline-none px-2 py-1 text-sm" />
                    </label>
                </div>
                
                <label >
                    <span className="text-xs">Email</span>
                    <input type="text" className=" border h-10 w-full outline-none px-2 py-1 text-sm" />
                </label>
                <label >
                    <span className="text-xs">Object</span>
                    <input type="text" className=" border h-10 w-full outline-none px-2 py-1 text-sm" />
                </label>
                <label >
                    <span className="text-xs">Message</span>
                    <textarea className=" border h-40 w-full outline-none px-2 py-1 text-sm" name="" id=""></textarea>
                </label>
                <div className="flex justify-end">
                    <button className="h-10 bg-black text-white w-36">Send</button>
                </div>
                
            </form>
        </div>
    )
}