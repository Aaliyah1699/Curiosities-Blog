import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsGithub } from 'react-icons/bs';
import { CiLinkedin } from 'react-icons/ci';

// github linkedin

const FooterComp = () => {
    return (
        <Footer container className='border border-t-8 border-pink-500'>
            <div className='w-full max-w-7xl mx-auto'>
                <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                    <div className='mt-5'>
                        <Link
                            to='/'
                            className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'
                        >
                            The Curiosities of{' '}
                            <span className='px-2 py-1 bg-gradient-to-r from-pink-500 via-pink-500 to-orange-400 rounded-lg text-white'>
                                Aaliyah
                            </span>
                        </Link>
                    </div>
                    <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
                        <div>
                            <Footer.Title title='About' />
                            <Footer.LinkGroup col>
                                <Footer.Link
                                    href='https://aaliyahm-portfolio.netlify.app/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    Portfolio
                                </Footer.Link>
                                <Footer.Link
                                    href='/about'
                                    
                                >
                                    About
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title='Follow Me' />
                            <Footer.LinkGroup col>
                                <Footer.Link
                                    href='https://github.com/Aaliyah1699'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    Github
                                </Footer.Link>
                                <Footer.Link href='https://www.linkedin.com/in/aaliyahmontgomery/'>
                                    LinkedIn
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title='Legal' />
                            <Footer.LinkGroup col>
                                <Footer.Link href='#'>
                                    Privacy Policy
                                </Footer.Link>
                                <Footer.Link href='#'>
                                    Terms &amp; Conditions
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className='w-full sm:flex sm:items-center sm:justify-between'>
                    <Footer.Copyright
                        href='#'
                        by='Aaliyah M.'
                        year={new Date().getFullYear()}
                    />
                    <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
                        <Footer.Icon
                            href='https://www.linkedin.com/in/aaliyahmontgomery/'
                            icon={CiLinkedin}
                        />
                        <Footer.Icon
                            href='https://github.com/Aaliyah1699'
                            icon={BsGithub}
                        />
                    </div>
                </div>
            </div>
        </Footer>
    );
};

export default FooterComp;
