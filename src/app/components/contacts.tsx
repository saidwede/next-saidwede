export default function Contacts(){
    return (
        <div className="h-full flex items-center justify-center px-5 lg:px-0">
            <form method="POST" className="w-[500px]" action="https://formspree.io/f/xovaqlrp" >
                <h1 className="text-center font-bold text-xl py-3">Contact</h1>
                <div className="grid grid-cols-2 gap-2">
                    <label >
                        <span className="text-xs">First name</span>
                        <input type="text" name="first_name" className=" border h-10 w-full outline-none px-2 py-1 text-sm"  required/>
                    </label>
                    <label >
                        <span className="text-xs">Last name</span>
                        <input type="text" name="last_name" className=" border h-10 w-full outline-none px-2 py-1 text-sm"  required/>
                    </label>
                </div>
                
                <label >
                    <span className="text-xs">Email</span>
                    <input type="email" name="email" className=" border h-10 w-full outline-none px-2 py-1 text-sm"  required/>
                </label>
                <label >
                    <span className="text-xs">Object</span>
                    <input type="text" name="object" className=" border h-10 w-full outline-none px-2 py-1 text-sm"  required/>
                </label>
                <label >
                    <span className="text-xs">Message</span>
                    <textarea className="border h-40 w-full outline-none px-2 py-1 text-sm" name="message" id="" required></textarea>
                </label>
                <div className="flex justify-end">
                    <button type="submit" className="h-10 bg-black text-white w-36">Send</button>
                </div>
                
            </form>
        </div>
    )
}