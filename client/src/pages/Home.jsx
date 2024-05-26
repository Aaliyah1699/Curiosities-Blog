import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch('/api/post/getPosts');
            const data = await res.json();
            setPosts(data.posts);
        };
        fetchPosts();
    }, []);

    return (
        <div>
            <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto '>
                <h1 className='text-3xl font-bold lg:text-6xl barriecito '>
                    Welcome to Curiosities of Aaliyah!
                </h1>
                <p className='text-gray-500 text-xs sm:text-sm'>
                    This blog is a cabinet stuffed to the brim with my musings,
                    imaginings, fascinations, ponderings, and all things
                    curious.
                </p>
                <Link
                    to='/search'
                    className='text-xs sm:text-sm text-teal-500 font-bold hover:underline'
                >
                    View All Posts
                </Link>
            </div>
            <div className='p-3 bg-pink-100 dark:bg-slate-700'>
                <CallToAction />
            </div>
            <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
                {posts && posts.length > 0 && (
                    <div className='flex flex-col gap-6'>
                        <h2 className='text-2xl font-semibold text-center barriecito'>
                            Recent Posts
                        </h2>
                        <div className='flex flex-wrap gap-4 place-content-center'>
                            {posts.map((post) => (
                                <PostCard key={post._id} post={post} />
                            ))}
                        </div>
                        <Link
                            to={'/search'}
                            className='text-lg text-teal-500 hover:underline text-center'
                        >
                            View All Posts
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
