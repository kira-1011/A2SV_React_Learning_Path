import { AiOutlineLoading } from 'react-icons/ai'

const LoadingPage = () => {
    return (  
        <div className='grid h-screen place-items-center'>
            <AiOutlineLoading className="animate-spin text-orange-500 text-8xl"/>
        </div>
    );
}
 
export default LoadingPage;