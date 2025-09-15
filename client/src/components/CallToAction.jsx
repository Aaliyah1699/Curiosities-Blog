import { Button } from 'flowbite-react';

const CallToAction = () => {
    return (
        <div className='flex flex-col sm:flex-row p-3 border border-orange-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
            <div className='flex-1 justify-center flex flex-col'>
                <h2 className='text-2xl capitalize'>
                    For a deeper look at what I can do
                </h2>
                <p className='text-gray-500 my-2 capitalize'>
                    I invite you to explore my portfolio
                </p>
                <Button
                    gradientDuoTone='pinkToOrange'
                    className='rounded-tl-xl rounded-bl-none mb-2'
                >
                    <a
                        href='https://aaliyahs-portfolio.netlify.app/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Portfolio 💐
                    </a>
                </Button>
            </div>
            <div className='p-7 flex-1'>
                <img src='https://i.pinimg.com/736x/1f/46/8c/1f468c1437ccd23228a00e26cf1377c7.jpg' />
{/*                 <img src='https://binarapps.com/wp-content/uploads/2021/09/Top-10-Programming-Languages-of-the-Future.png' /> */}
            </div>
        </div>
    );
};

export default CallToAction;
