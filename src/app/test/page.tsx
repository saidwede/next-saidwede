export default function TestPage(){
    return (
        <div className="flex flex-col gap-0">
            <div className="h-screen bg-red-950 none"></div>
            <div className="h-screen bg-pink-500 none"></div>
            <div className="flex flex-col gap-0 para h-[100vh]">
                <section className="h-[100vh] bg-gray-800"></section>
                <section className="h-[100vh] bg-orange-600 center"></section>
                <section className="h-[100vh] bg-blue-700 center"></section>
                <section className="h-[100vh] bg-gray-800 center"></section>
                <section className="h-[100vh] bg-orange-600 center"></section>
                <section className="h-[100vh] bg-blue-700"></section>

            </div>
            
            <div className="h-screen bg-slate-500 none"></div>
            <div className="h-screen bg-teal-600 none"></div>
            <div className="h-screen bg-red-950"></div>
            <div className="h-screen bg-slate-500 none"></div>
        </div>
    )
}