import Head from 'next/head';
import Image from "next/image";
import Hero from '@/components/Hero';
import Link from 'next/link';



import styles from "@/styles/Home.module.scss";

export default function Home ()
{
  return (
    <>
      <Head >
        <Link href="https://fonts.googleapis.com/css2?family=Workbench&display=swap" rel="stylesheet">
          <title>Landing page</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Link>
      </Head>
      <main className={ `${ styles.main } ` }>
        <Hero
          title="Landingu Peezi"
          subtitle='project showcase'/>
      </main>
      
    </>
  );
}
