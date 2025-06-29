import { Button } from 'flowbite-react';

const CallToAction = () => {
    return (
        <div className='flex flex-col sm:flex-row p-3 border border-orange-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
            <div className='flex-1 justify-center flex flex-col'>
                <h2 className='text-2xl capitalize'>
                    For a deeper look at what I can do
                </h2>
                <p className='text-gray-500 my-2 capitalize'>
                    I invite you to explore my portfolios
                </p>
                <Button
                    gradientDuoTone='pinkToOrange'
                    className='rounded-tl-xl rounded-bl-none'
                >
                    <a
                        href='https://aaliyahm-portfolio.netlify.app/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Software Development Portfolio
                    </a>
                </Button>
                 <Button
                    gradientDuoTone='orangeToPink'
                    className='rounded-tl-xl rounded-bl-none'
                >
                    <a
                        href='https://aaliyah-da-portfolio.netlify.app/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Data Analysis Portfolio
                    </a>
                </Button>
            </div>
            <div className='p-7 flex-1'>
                <img src='https://binarapps.com/wp-content/uploads/2021/09/Top-10-Programming-Languages-of-the-Future.png' />
            </div>
        </div>
    );
};

export default CallToAction;
