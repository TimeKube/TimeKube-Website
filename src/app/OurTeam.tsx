import React from 'react';
import Image from "next/image"

const people = [
    {
        name: 'Bassel Fares',
        role: 'Software Engineer',
        imageUrl: '/BasselPic.png',
        linkedInUrl: 'https://www.linkedin.com/in/basselfares',
        githubUrl: 'https://github.com/basselfares',
    },
    {
        name: 'Chris Martin',
        role: 'Software Engineer',
        imageUrl: 'https://media.licdn.com/dms/image/D5603AQFCBANz5cF5AQ/profile-displayphoto-shrink_200_200/0/1688953020987?e=2147483647&v=beta&t=kUkoz0j0nxj26IGwbeeYcqZBDscPy0DyM7fO7lgwIA4',
        linkedInUrl: 'https://www.linkedin.com/in/chrismartin1023',
        githubUrl: 'https://github.com/IllumihouseDev',
    },
    {
        name: 'Lucas Ho',
        role: 'Software Engineer',
        imageUrl: 'https://media.licdn.com/dms/image/C5103AQFfEyfUKvCxHA/profile-displayphoto-shrink_400_400/0/1578229212644?e=1713398400&v=beta&t=V5AGsvKfUBayHoAOoUBsfwCaDTWdsJFJJbsXjW5h5T4',
        linkedInUrl: 'https://www.linkedin.com/in/luchd/',
        githubUrl: 'https://github.com/luchd',
    },
    {
        name: 'Nassim Chibane',
        role: 'Software Engineer',
        imageUrl: 'https://media.licdn.com/dms/image/D4D03AQFTCKoaEa1RSA/profile-displayphoto-shrink_200_200/0/1708046525786?e=2147483647&v=beta&t=xXwlZ4Mx5QnYMAnQSstVS3K_9N1R5Yfmbae4i_86Wc0',
        linkedInUrl: 'https://www.linkedin.com/in/nassimchibane/',
        githubUrl: 'https://github.com/nchib',
    },
    {
        name: 'Ryan Sawadichai',
        role: 'Software Engineer',
        imageUrl: '/RyanPic.png',
        linkedInUrl: 'https://www.linkedin.com/in/ryan-sawadichai',
        githubUrl: 'https://github.com/rswdch',
    },
]

export default function OurTeam() {
    return (
    <section className="bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-8 lg:px-6">
          <div className="mx-auto mb-8 max-w-screen-sm lg:mb-6">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">Meet the Team!</h2>
              <p className="font-light sm:text-xl text-gray-400">Meet the team responsible for building TimeKube</p>
          </div> 
          <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {people.map((person) => (
            <li className='list-none p-0' key={person.name}>
              <div className="text-center text-gray-400">
                  <img className="mx-auto mb-4 w-36 h-36 rounded-full" src={person.imageUrl} alt="Profile Picture"/>
                  <h3 className="mb-1 text-2xl font-bold tracking-tight text-white">
                      <div>{person.name}</div>
                  </h3>
                  <p>{person.role}</p>
                  <ul className="flex justify-center mt-4 space-x-4">
                      <li>
                          <a href={person.linkedInUrl} className="text-[#00acee] hover:text-white" target="_blank">
                              <Image className="w-10 h-10" src="/LinkedInLogo.png" alt="LinkedInLogo" width={24} height={24}/>
                          </a>
                      </li>
                      <li>
                          <a href={person.githubUrl} className="hover:text-white text-gray-300" target="_blank">
                            <Image className="w-10 h-10" src="/GithubLogo.svg" alt="GithubLogo" width={24} height={24}/>
                          </a>
                      </li>
                  </ul>
              </div>
            </li>
          ))}
          </div>  
      </div>
    </section>
    )
}