export default function Card({ as: Tag = 'div', className = '', children, ...rest }) {
  return (
    <Tag className={`rounded-xl border border-line bg-surface p-5 ${className}`} {...rest}>
      {children}
    </Tag>
  )
}