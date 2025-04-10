import Image from "next/image";

export default function Home() {
  return (
      <main>
        <header/>
        <div>
          <h1>Hi, I'm Priscila</h1>
          <h2>Software developer</h2>
        </div>

        <div className="expirence">
          <h3>Expirence</h3>
          <p>"Passionate software developer, focused on building dynamic and scalable web applications that deliver amazing user experiences using the most current and efficient technologies available in the web development market."</p>
        <div className="espirence-time">

        </div>
        <div className="infos">
          <h3>Languages</h3>
          <div className="languages-info">
            <span>🇺🇸 EN - Intermediary</span>
            <span>🇧🇷 PT - Native Speaker</span>
          </div>
            <h3>Education</h3>
            <div className="educational-info">
            <span>🎓</span>
            <span>Systems analysis and development - UniRitter</span>
            </div>
          </div>
          <div className="buttons">
            <div className="social">

            </div>
            <button>contact me</button>
          </div>
        </div>
  </main>
  )
}