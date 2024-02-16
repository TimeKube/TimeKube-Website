import React from 'react';
import Image from "next/image";
import Link from "next/link";
import OurTeam from "./OurTeam";

export default function Home() {
  return (
    <main className="flex min-h-screen min flex-col items-center justify-between">
        <div className="w-full grid xl:grid-cols-2 lg:grid-cols-1">
          <div className="px-12 py-14 xl:px-6 xl:py-14 xl:pl-36 xl:pt-12 2xl:pt-24">
            <h1 className="text-6xl font-semibold py-10 text-center">Travel back in time to your past clusters</h1>
            <p className="py-2 pb-10 text-2xl text-slate-600 font-medium text-center">TimeKube provides a user-friendly GUI for developers to easily and securely create backups for your Kubernetes clusters with a few clicks of a button; ensuring the protection of your data, configurations, and files.</p>
            {/* <Link className="flex justify-center items-center" href={"/"}>
              <button className="btn btn-primary">Get Started</button>
            </Link> */}
          </div>
          <div className="px-12 py-4 pb-24 xl:px-6 xl:py-24 xl:pr-36">
            <div className="flex justify-center items-center">
              <Image className="" src="/ClustersPage.png" alt="GrafanaImage" width={1500} height={1000}/>
            </div>
          </div>
          <div className="px-12 py-14 xl:px-6 xl:py-24 xl:pr-36 bg-slate-800">
            <div className="flex justify-center items-center">
              <img className="" src="/Scripts.png" alt="TimeKubeLogo" width={500} height={500}/>
            </div>
          </div>
          <div className="px-12 py-4 pb-24 xl:px-6 xl:py-14 xl:pr-36 text-white bg-slate-800">
            <h1 className="text-6xl font-semibold py-10 xl:pt-32 text-center">Ditch your scripts</h1>
            <p className="py-2 pb-10 text-2xl text-slate-300 font-medium text-center">With just a few clicks, TimeKube ensures the smooth execution of tasks, making Kubernetes backup management a breeze. Protect your data, files, and configurations and leave the scripting behind with TimeKube.</p>
            {/* <Link className="flex justify-center items-center" href={"/"}>
              <button className="btn btn-primary">Get Started</button>
            </Link> */}
          </div>
          <div className="px-12 py-14 xl:px-6 xl:py-14 xl:pl-36 xl:pt-12 2xl:pt-24">
            <h1 className="text-6xl font-semibold py-10 text-center">Visualize cluster health with Grafana</h1>
            <p className="py-2 pb-10 text-2xl text-slate-600 font-medium text-center">TimeKube seamlessly integrates Grafana, providing a graphical representation of your cluster&rsquo;s metrics. This facilitates the user to make informed decisions regarding the optimal timing for backing up your cluster&rsquo;s state for future use.</p>
            {/* <Link className="flex justify-center items-center" href={"/"}>
              <button className="btn btn-primary">Get Started</button>
            </Link> */}
          </div>
          <div className="px-12 py-4 pb-24 xl:px-6 xl:py-24 xl:pr-36">
            <div className="flex justify-center items-center">
              <Image className="" src="/Grafana.png" alt="TimeKubeLogo" width={1500} height={1000}/>
            </div>
          </div>
          <div className="px-12 py-14 xl:px-6 xl:py-24 xl:pr-36 bg-slate-800">
            <div className="flex justify-center items-center">
            <Image className="" src="/Snapshot.png" alt="TimeKubeLogo" width={400} height={400}/>
            </div>
          </div>
          <div className="px-12 py-4 pb-24 xl:px-6 xl:py-14 xl:pr-36 text-white bg-slate-800">
            <h1 className="text-6xl font-semibold py-10 xl:pt-32 text-center">Keep backups organized</h1>
            <p className="py-2 pb-10 text-2xl text-slate-300 font-medium text-center">TimeKube organizes your backups which are securely stored on your disk or your cloud provider of choice. Save time organizing your backups and avoid data loss from having backups scattered and hidden in different places.</p>
            {/* <Link className="flex justify-center items-center" href={"/"}>
              <button className="btn btn-primary">Get Started</button>
            </Link> */}
          </div>
        </div>
      <div className="w-full">
          <OurTeam/>
      </div>  
    </main>
  );
}
