import Link from "next/link";






export default function Heder() {
    return (
        <div className="navbar">
        <h1>MUHAMMAD SAIF TANOLI</h1>
        <ul>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/skills"}>Skills</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    )
}