export default function Footer({ identity, social }) {
  return (
    <footer className="border-t border-line py-8 text-muted">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 md:px-8">
        <p>
          &copy; {new Date().getFullYear()} {identity.name}
        </p>
        <ul className="flex gap-5">
          {social.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="hover:text-ink">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}