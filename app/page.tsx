import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <>
      <p>Nathaniel ceci mon appli test nextjs</p>

      <Link href="/contact"> Lien vers formulaire</Link>
      </>
    </main>
  )
}
