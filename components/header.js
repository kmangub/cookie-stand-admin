import Link from 'next/link'
export default function Header(props){
    return(
        <header className="flex p-4 bg-green-500">
        <h1 className="text-4xl">{props.title}</h1>
        <nav>
          <Link href='/overview'>
            <a className="float-right pl-1 pr-1 mt-3 mx-50 text-md ">Overview</a>
          </Link>
        </nav>
        </header>
      )
}