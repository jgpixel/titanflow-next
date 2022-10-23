export default function Hero() {
    return (
        <main className='flex flex-col mt-[100px] w-full md:mt-10'>
            <div className='flex justify-between items-start mb-[100px] md:flex-col md:w-full md:mb-10'>
                <h1 className='font-bold text-6xl w-45% md:text-4xl md:w-full md:text-center'>Real time <span className='text-sky-400 text-left'>mobile</span> options flow</h1>
                <div className='flex justify-between w-45% md:w-full md:flex-col-reverse md:justify-center md:items-center'>
                    <div className='flex flex-col mr-20 w-50% md:w-full md:text-center xl:mr-3'>
                        <p className='text-base font-bold mb-4'>TitanFlow at your fingertips will help you start making successful trades.</p>
                        <p className='text-[0.9rem] text-zinc-500'>Get actionable, real-time alerts, and start making informed decisions on how, when, and where to invest.</p>
                    </div>
                    <GetTheApp />
                </div>
            </div>
        </main>
    );
}

function GetTheApp() {
    return (
        <a href='https://titanflow.app.link/AxNjMh9Zcmb' target='_blank' className='md:my-10'>
            <div className='w-[145px] h-[165px] flex justify-center items-center overflow-hidden gradient-border'>
                <div className='bg-no-repeat bg-center bg-cover w-95% h-[95%] bg-[url("/images/get-the-app.png")]'></div>
            </div>
        </a>
    );
}