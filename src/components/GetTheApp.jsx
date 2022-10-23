export default function GetTheApp() {
    return (
        <div className='flex'>
            <a href='https://titanflow.app.link/AxNjMh9Zcmb' target='_blank' className='text-white get-app'>
                <div className='flex justify-center items-center p-1 gradient-border relative'>
                    <div className='flex justify-center items-center p-2 rounded-md bg-white'>
                        <img src='/images/logo.png' alt='TitanFlow logo.' className='w-6'/>
                        <div className='box w-10 ml-1 h-[calc(100%_-_0.5rem)] rounded-md bg-white absolute left-0 -z-10'></div>
                    </div>
                    <span className='mx-3 get-app-text'>Get the app</span>
                </div>
            </a>
        </div>
    );
}