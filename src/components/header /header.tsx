import Image from 'next/image';
import "./header.scss";

interface HeaderProps {

}
export function Header(){
    return (
         <div className="header">
              <div>
                <h1>Hi, I'm Prisicla LINDA</h1>
                <h2>SOftware developer</h2>
              </div>
              <Image
                  src="/me.jpg"
                  alt="minha foto"
                  width={325}
                  height={267}
                  priority
              />
        
        </div>
    )
}
