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
            <p className="py-2 pb-10 text-2xl text-slate-600 font-medium text-center"> TimeKube provides a user-friendly GUI for developers to easily and securely create backups for your Kubernetes clusters with a few clicks of a button; ensuring the protection of your data, configurations, and files.</p>
            <Link className="flex justify-center items-center" href={"/"}>
              <button className="btn btn-primary">Get Started</button>
            </Link>
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
            <p className="py-2 pb-10 text-2xl text-slate-300 font-medium text-center"> TimeKube provides a user-friendly GUI for developers to easily and securely create backups for your Kubernetes clusters with a few clicks of a button; ensuring the protection of your data, configurations, and files.</p>
            <Link className="flex justify-center items-center" href={"/"}>
              <button className="btn btn-primary">Get Started</button>
            </Link>
          </div>
          <div className="px-12 py-14 xl:px-6 xl:py-14 xl:pl-36 xl:pt-12 2xl:pt-24">
            <h1 className="text-6xl font-semibold py-10 text-center">Visualize cluster health with Grafana</h1>
            <p className="py-2 pb-10 text-2xl text-slate-600 font-medium text-center">TimeKube seamlessly integrates Grafana, providing a graphical representation of your cluster&rsquo;s metrics. This facilitates the user to make informed decisions regarding the optimal timing for backing up your cluster&rsquo;s state for future use.</p>
            <Link className="flex justify-center items-center" href={"/"}>
              <button className="btn btn-primary">Get Started</button>
            </Link>
          </div>
          <div className="px-12 py-4 pb-24 xl:px-6 xl:py-24 xl:pr-36">
            <div className="flex justify-center items-center">
              <Image className="" src="/Grafana.png" alt="TimeKubeLogo" width={1500} height={1000}/>
            </div>
          </div>
          {/* <div className="px-12 py-14 xl:px-6 xl:py-24 xl:pr-36 bg-slate-800">
            <div className="flex justify-center items-center">
              <img className="" src="https://d33wubrfki0l68.cloudfront.net/a8232fe61f5616ec1d2c1c4edc6b133e3ea7d87a/1d5c5/static/todotest-f0c03d0eb0ad0668d03e40699c91a17b.png" alt="TimeKubeLogo" width={500} height={500}/>
            </div>
          </div>
          <div className="px-12 py-4 pb-24 xl:px-6 xl:py-14 xl:pr-36 text-white bg-slate-800">
            <h1 className="text-6xl font-semibold py-10 xl:pt-32 text-center">Keep backups organized</h1>
            <p className="py-2 pb-10 text-2xl text-slate-300 font-medium text-center"> TimeKube provides a user-friendly GUI for developers to easily and securely create backups for your Kubernetes clusters with a few clicks of a button; ensuring the protection of your data, configurations, and files.</p>
            <Link className="flex justify-center items-center" href={"/"}>
              <button className="btn btn-primary">Get Started</button>
            </Link>
          </div> */}
        </div>
      <div className="w-full">
          <OurTeam/>
      </div>  
    </main>
  );
}
