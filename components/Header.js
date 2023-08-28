import Link from 'next/link';
import Image from 'next/image'
import logo from '/public/logo.png';

export default function Header() {
  return (
    <header>
      <p className="text-2xl dark:text-white text-center hover:"> 
        <Link href="/">
          <a>
            <Image src={logo} alt="Picture of the author" width="580px" height="180px" />
          </a>
        </Link>
      </p>
    </header>
  );
}
