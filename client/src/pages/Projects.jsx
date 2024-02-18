import CallToAction from '../components/CallToAction';

const Projects = () => {
    return (
        <div className='min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3'>
            <h1 className='text-3xl font-semibold'>My Projects</h1>
            <p className='text-md text-gray-500'>
                My portfolio highlights my favorite creations and shows the
                breadth of my skills - take a look!
            </p>
            <CallToAction />
        </div>
    );
};

export default Projects;
