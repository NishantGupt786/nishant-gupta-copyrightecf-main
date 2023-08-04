import BottomNavbar from '@/components/bottomNavbar/BottomNavbar'
import Hero from '@/components/copyright ecf/heroSection'
import Navbar from '@/components/navbar/navbar'
import Image from 'next/image'

function Ecopyright() {
    return (
        <main>
            <Navbar />
            <Hero />
            <div class="bg-slate-100">
                <div class="container">
                    <div class="flex flex-col items-center text-violet-950 font-bold pt-10 text-xl md:text-3xl lg:text-3xl mx-8 md:mx-24 lg:mx-48">
                    <h2 class="primary-text">IEEE Electronic Copyright Form</h2>
                    </div>
                </div>
                <br />
                <div class="container">
                    <div class="flex flex-col text-violet-950 font-bold pt-10 text-xl md:text-xl lg:text-xl mx-8 md:mx-24 lg:mx-48">
                        <h3 class="primary-text">IEEE Electronic Copyright Form</h3>
                    </div>
                </div>

                <div class="container">
                    <div class="flex flex-col text-slate-500 font-bold pt-10 text-base md:text-3base lg:text-3base mx-8 md:mx-24 lg:mx-48">
                        <p>- The material submitted for presentation at ic-ETITE2020 must be original, not published or being considered for publication elsewhere.</p>
                        <p>- All accepted papers shall appear in the Conference Proceedings and on USB Flash drive, and will be distributed to participants.</p>
                        <p>- IEEE holds the copyright of material presented at the conference. One of the authors should fill in the Copyright Transfer using the electronic copyright form (eCf).</p>
                        <p>- After the successful registration please upload the copyright file received in your registered mail ID in the document upload portal.</p>
                        <p>- <a href="http://ipactconference.com/ins-ecopyright.pdf" class="text-cyan-600">Click here</a> -for IEEE e-copyright form instructions. </p>
                    </div>
                </div>
                <br />
                <br />
                <div class="flex flex-col items-center">
                    <form class="w-full max-w-lg place-content-center" action="https://ecopyright.ieee.org/ECTT/IntroPage.jsp" method="post">
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-base font-bold mb-2" for="grid-first-name">
                                    Publication Title
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-grey-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="PubTitle" type="text" placeholder="IEEE Conference on Topic" />
                            </div>
                            <div class="w-full md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-base font-bold mb-2" for="grid-last-name">
                                    Article Title
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="ArtTitle" type="text" placeholder="On Fluid Queuing Systems with Strict Priority" />
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-base font-bold mb-2" for="grid-password">
                                    Authors of The Article
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="AuthName" type="text" placeholder="Yong Liu and Weibo Gong" />
                                <p class="text-gray-600 text-xs italic">Please write the names of all the Authors</p>
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-base font-bold mb-2" for="grid-first-name">
                                    ArtId
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-grey-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="ArtId" type="text" placeholder="12345" />
                            </div>
                            <div class="w-full md:w-1/2 px-3 hidden">
                                <label class="block uppercase tracking-wide text-gray-700 text-base font-bold mb-2" for="grid-last-name">
                                    ArtSource
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="ArtSource" type="hidden" placeholder="*****" />
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-base font-bold mb-2" for="grid-password">
                                    Authors e-mail address
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="AuthEmail" type="text" placeholder="y.liu@ieee.org,a.smith@ieee.org" />
                                <p class="text-gray-600 text-xs italic">. If multiple emails are present, they should be comma separated.</p>
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6 hidden">
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-base font-bold mb-2" for="grid-password">
                                    Return URL
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="rtrnurl" type="hidden" placeholder="http://yoururl.com/page.html" />
                            </div>
                        </div>
                        <div class="md:flex">
                            <div class="md:w-1/4"></div>
                            <div class="md:w-1/6"></div>
                            <div class="md:w-2/3">
                                <button class="shadow bg-blue-950 hover:bg-blue-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button" name="Submit">
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <br />
            </div>
            <BottomNavbar />
        </main>
    )
}

export default Ecopyright;