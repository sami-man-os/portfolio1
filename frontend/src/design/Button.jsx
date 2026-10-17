const base =
  'eyebrow inline-flex items-center justify-center gap-2 rounded-lg border font-medium transition-transform duration-150 hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0'

const variants = {
  primary: 'border-accent bg-accent text-accent-ink',
  secondary: 'border-line bg-surface text-ink',
  ghost: 'border-transparent text-muted hover:text-ink',
}

const sizes = {
  md: 'px-6 py-3',
  sm: 'px-4 py-2',
}

export default function Button({ href, variant = 'primary', size = 'md', className = '', children, ...rest }) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  )
}