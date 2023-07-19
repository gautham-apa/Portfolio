import React from 'react'
import tspProject from '../assets/Projects/TravellingSalesman.png'
import mapReduce from '../assets/Projects/MapReduce.png'
import wifiSimulator from '../assets/Projects/WifiSimulator.png'
import netflixClone from '../assets/Projects/NetflixClone.jpg'
import jobsDatabase from '../assets/Projects/JobsDatabase.png'

const Projects = () => {
    return (
        <div className='w-full items-center content-center pt-[90px]'>
            <div className='text-[#232a41] max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#0a192f]'>Projects</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4'>
                    <div class="rounded overflow-hidden shadow-lg p-2 grid grid-cols-1 content-between">
                        <div>
                            <div class="px-6 pt-4 pb-1">
                                <div class="font-bold text-xl mb-2">Netflix Clone</div>
                                <p class="text-gray-700 text-base">
                                    A scaled down version of the video streaming API built with Spring Boot.
                                </p>
                            </div>
                            <div class="px-6 pt-4 pb-1">
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Java</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Spring Boot</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Spring Security</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">JWT</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">MySQL</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#RestAPI</span>
                            </div>
                        </div>
                        <div className='justify-center flex flex-row'>
                            <a href="https://github.com/gautham-apa/NetflixClone">
                                <button className='text-center rounded-md px-3 py-1 m-2 bg-[#0a192f] text-white text-md hover:scale-[1.07] duration-500'>Github</button>
                            </a>
                        </div>
                    </div>

                    <div class="rounded overflow-hidden shadow-lg p-2 grid grid-cols-1 content-between">
                        <div>
                            <div class="px-6 pt-4 pb-1">
                                <div class="font-bold text-xl mb-2">Google Map Reduce</div>
                                <p class="text-gray-700 text-base">
                                    A simplified implementation of Google's Map Reduce paper by Jeffrey Dean and Sanjay Ghemawat using Golang.
                                </p>
                            </div>
                            <div class="px-6 pt-4 pb-1">
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Go</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#DistributedSystems</span>
                            </div>
                        </div>
                        <div className='justify-center flex flex-row'>
                            <a href="https://github.com/gautham-apa/MapReduce">
                                <button className='text-center rounded-md px-3 py-1 m-2 bg-[#0a192f] text-white text-md hover:scale-[1.07] duration-500'>Github</button>
                            </a>
                        </div>
                    </div>

                    <div class="rounded overflow-hidden shadow-lg p-2">
                        <div>
                            <div class="px-6 pt-4 pb-1">
                                <div class="font-bold text-xl mb-2">Medical Plan Service</div>
                                <p class="text-gray-700 text-base">
                                    An API for medical plan contained in a Redis keyvalue store with services for conditional GET, POST, PATCH and DELETE with Google OAuth 2.0 security.
                                </p>
                            </div>

                            <div class="px-6 pt-4 pb-1">
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Java</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Spring Boot</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Redis</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">OAuth 2.0</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#RestAPI</span>
                            </div>
                        </div>
                        <div className='justify-center flex flex-row'>
                            <a href="https://github.com/gautham-apa/MedicalPlanAPI">
                                <button className='text-center rounded-md px-3 py-1 m-2 bg-[#0a192f] text-white text-md hover:scale-[1.07] duration-500'>Github</button>
                            </a>
                        </div>
                    </div>

                    <div class="rounded overflow-hidden shadow-lg p-2">
                        <div>
                            <div class="px-6 pt-4 pb-1">
                                <div class="font-bold text-xl mb-2">Jobs Bot and Database</div>
                                <p class="text-gray-700 text-base">
                                    A bot to scrape jobs data from Linkedin and Glassdoor, consolidate into a database and also perform analytics to generate insights.
                                </p>
                            </div>

                            <div class="px-6 pt-4 pb-1">
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Python</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Scrapy</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Beautiful Soup</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">MySQL</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Pandas</span>
                            </div>
                        </div>
                        <div className='justify-center flex flex-row'>
                            <a href="https://github.com/aiskunks/Jobs_Database/tree/main/Artificial_Intelligence">
                                <button className='text-center rounded-md px-3 py-1 m-2 bg-[#0a192f] text-white text-md hover:scale-[1.07] duration-500'>Github</button>
                            </a>
                            <a href="https://github.com/aiskunks/Jobs_Database/blob/main/Artificial_Intelligence/FinalProjectReport.pdf">
                                <button className='text-center rounded-md px-3 py-1 m-2 bg-[#0a192f] text-white text-md hover:scale-[1.07] duration-500'>Project</button>
                            </a>
                        </div>
                    </div>

                    <div class="rounded overflow-hidden shadow-lg p-2">
                        <div>
                            <div class="px-6 pt-4 pb-1">
                                <div class="font-bold text-xl mb-2">Travelling Salesman Problem</div>
                                <p class="text-gray-700 text-base">
                                    A solution to Travelling Salesman Problem using Christofides, 2-OPT optimization and Genetic algorithm.
                                </p>
                            </div>

                            <div class="px-6 pt-4 pb-1">
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Java</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Algorithm</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Christofides</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#DataStructures</span>
                            </div>
                        </div>
                        <div className='justify-center flex flex-row'>
                            <a href="https://github.com/aiskunks/Jobs_Database/tree/main/Artificial_Intelligence">
                                <button className='text-center rounded-md px-3 py-1 m-2 bg-[#0a192f] text-white text-md hover:scale-[1.07] duration-500'>Github</button>
                            </a>
                            <a href="https://github.com/aiskunks/Jobs_Database/blob/main/Artificial_Intelligence/FinalProjectReport.pdf">
                                <button className='text-center rounded-md px-3 py-1 m-2 bg-[#0a192f] text-white text-md hover:scale-[1.07] duration-500'>Project</button>
                            </a>
                        </div>
                    </div>

                    <div class="rounded overflow-hidden shadow-lg p-2 grid grid-cols-1 content-between">
                        <div>
                            <div class="px-6 pt-4 pb-1">
                                <div class="font-bold text-xl mb-2">Radiation</div>
                                <p class="text-gray-700 text-base">
                                    An application built with Java and Swing to simulate wifi signal strength at different locations, given a floor plan.
                                </p>
                            </div>
                            <div class="px-6 pt-4 pb-1">
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Java</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">C++</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Java Swing</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">JNI</span>
                            </div>
                        </div>
                        <div className='justify-center flex flex-row'>
                            <a href="https://github.com/NEU-MS-Projects/wifi-simulator-csye6200">
                                <button className='text-center rounded-md px-3 py-1 m-2 bg-[#0a192f] text-white text-md hover:scale-[1.07] duration-500'>Github</button>
                            </a>
                            <a href="https://github.com/NEU-MS-Projects/wifi-simulator-csye6200/blob/main/RadiationProject.pdf">
                                <button className='text-center rounded-md px-3 py-1 m-2 bg-[#0a192f] text-white text-md hover:scale-[1.07] duration-500'>Project</button>
                            </a>
                        </div>
                    </div>        

                </div>
            </div>
        </div>
    )
}

export default Projects