const navLinks = [
  { label: 'Кейси', href: '#cases' },
  { label: 'Про мене', href: '#about' },
  { label: 'Контакти', href: '#contacts' },
  { label: 'Відгуки', href: '#reviews' },
]

const languages = ['EN', 'DE', 'UA']

const services = ['landg pages', 'APPs', 'Web Services', 'Coding']

function App() {
  return (
    <main className="hero">
      <header className="header">
        <nav className="nav" aria-label="Основна навігація">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a className="logo" href="#top">
          Nadiia Manakova
        </a>
        <div className="header-right">
          <div className="lang" role="group" aria-label="Мова">
            {languages.map((lang) => (
              <button key={lang} type="button" aria-current={lang === 'UA'}>
                {lang}
              </button>
            ))}
          </div>
          <a className="btn btn-write" href="#contacts">
            Написати
          </a>
        </div>
      </header>

      <section className="intro" id="top">
        <h1>
          Проєктую інтерфейси і сама перетворюю їх на код:
        </h1>
        <p className="subtitle">Від дослідження й Figma до живого сайту</p>
        <div className="actions">
          <a className="btn btn-primary" href="#cases">
            Дивитися кейси
          </a>
          <a className="btn btn-outline" href="#contacts">
            Залишити повідомлення
          </a>
        </div>
      </section>

      <ul className="services">
        {services.map((name) => (
          <li key={name} className="card">
            <span className="card-icon" aria-hidden="true">
              #
            </span>
            <span className="card-label">{name}</span>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default App
