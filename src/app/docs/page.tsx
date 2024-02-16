import React from 'react';
import Image from "next/image";
import Link from "next/link";
import Sidebar from './sidebar';

export default function Docs() {
  return (
    <main className="py-6">
        <div className='w-1/5'><Sidebar /></div>
        <div className='w-4/5 float-right pl-28 pr-48'>
            <h1 className='text-5xl pt-10 pb-6 font-bold'>TimeKube</h1>
            <div className='text-xl text-slate-600 font-medium'>Back up your Kubernetes Clusters using TimeKube</div>
            <h1 className='text-4xl pt-10 pb-6 font-bold'>Introduction</h1>
            <div className='text-xl text-slate-600 font-medium'>
                <div className='pb-4'>TimeKube is a Kubernetes &quot;Time Machine&quot; that provides developers with an intuitive, user-friendly GUI to easily and securely create backups for your Kubernetes clusters with a few clicks of a button; ensuring the protection of your data, configurations, and files.</div>
                <div className='pb-4'>Most free and open-source Kubernetes backup and restore tools focus on command-line usage requiring developers to learn the complexities of yet another command-line tool which can have complicated usage patterns and lack of discoverability for core features. Proprietary, commercial solutions exist but are equally complex, promising a large feature set to justify their value which results in a lot of bloat and a high price tag.</div>
                <div className='pb-4'>TimeKube focuses on the workflow of creating and organizing backups so that the data for your cluster is never lost and can be found and restored by any developer in your team.</div>
            </div>
            <h1 className='text-4xl pt-10 pb-6 font-bold'>Features</h1>
            <div className='text-xl text-slate-600 font-medium'>
                <ul className="list-disc ml-8">
                    <li className='pb-4'>Back up the state of your Kubernetes clusters securely to a file or on the cloud (AWS S3).</li>
                    <li className='pb-4'>Organize and view previously saved backups.</li>
                    <li className='pb-4'>Retrieve backup files for restoring your Kubernetes clusters.</li>
                </ul>
            </div>
            <h1 className='text-4xl pt-10 pb-6 font-bold'>Installation</h1>
            <div className='text-xl text-slate-600 font-medium'>
                <div className='pb-4'>Start by cloning the repo, then run the scripts to install dependencies and start the app:</div>
                <div className='pb-4'>Next, open up a browser window and navigate to http://localhost:3000/</div>
            </div>
            <h1 className='text-4xl pt-10 pb-6 font-bold'>Getting Started</h1>
            <div className='text-xl text-slate-600 font-medium'>
                <div className='pb-4'>Initial configuration of the app requires creating a .env file and adding specific key-value pairs. An example file with relevant keys is included in .env.example. See each of the following sections on how to configure features.</div>
            </div>
            <h1 className='text-4xl pt-10 pb-6 font-bold'>Database Configuration</h1>
            <div className='text-xl text-slate-600 font-medium'>
                <div className='pb-4'>By default, application data is stored locally in ./appdata/snapshots.db. However, if you would prefer to host application data on your own database, chase the DATABASE_URL key.</div>
            </div>
        </div>
        
    </main>
  );
}
