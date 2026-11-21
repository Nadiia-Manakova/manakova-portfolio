// Перший екран за планом: docs/site-plan.md (розділи 1 і 3, блок «Перший екран»)
const navLinks = [
  { label: 'Кейси', href: '#cases' },
  { label: 'Про мене', href: '#about' },
  { label: 'Контакти', href: '#contacts' },
  { label: 'Відгуки', href: '#reviews' },
]

const languages = ['EN', 'DE', 'UA']

const services = [
  { name: 'Landing pages', text: 'Лендинги з чіткою метою і дією' },
  { name: 'APPs', text: 'Мобільні застосунки з продуманим UX' },
  { name: 'Web Services', text: 'Вебсервіси від дослідження до релізу' },
  { name: 'Coding', text: 'Верстка та код сайтів: HTML, CSS, React' },
]

function App() {
  return (
    <main className="hero" id="top">
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
          <a className="btn btn-write" href="/cv.pdf" download>
            Завантажити CV
          </a>
        </div>
      </header>

      <section className="intro">
        <div className="intro-text">
          <p className="role rise" style={{ '--d': '0ms' } as React.CSSProperties}>
            UI/UX Designer · UI/UX Engineer
          </p>
          <h1 className="rise" style={{ '--d': '100ms' } as React.CSSProperties}>
            Проєктую інтерфейси і сама перетворюю їх на робочий код
          </h1>
          <p className="subtitle rise" style={{ '--d': '200ms' } as React.CSSProperties}>
            від дослідження та Figma до живого сайту
          </p>
          <div className="actions rise" style={{ '--d': '300ms' } as React.CSSProperties}>
            <a className="btn btn-primary" href="#cases">
              Дивитися кейси
            </a>
            <a className="btn btn-outline" href="#contacts">
              Написати
            </a>
          </div>
          <p className="meta rise" style={{ '--d': '400ms' } as React.CSSProperties}>
            Фултайм · Швейцарія
          </p>
        </div>

        {/* Місце для головного графічного елемента з анімацією завантаження */}
        <div className="art" aria-hidden="true">
          <span className="blob blob-a" />
          <span className="blob blob-b" />
          <span className="blob blob-c" />
          <span className="art-code">{'</>'}</span>
        </div>
      </section>

      <ul className="services">
        {services.map((s, i) => (
          <li
            key={s.name}
            className="card rise"
            style={{ '--d': `${500 + i * 100}ms` } as React.CSSProperties}
          >
            <span className="card-icon" aria-hidden="true">
              #
            </span>
            <strong className="card-title">{s.name}</strong>
            <span className="card-text">{s.text}</span>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default App
