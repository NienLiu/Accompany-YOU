export type AppSection = 'chat' | 'role' | 'feed' | 'me'

type NavBarProps = {
  active: AppSection
  onChange: (section: AppSection) => void
}

const navItems: Array<{ key: AppSection; icon: string; label: string }> = [
  { key: 'chat', icon: '💬', label: '聊天' },
  { key: 'role', icon: '🧑', label: '角色' },
  { key: 'feed', icon: '📰', label: '陪伴圈' },
  { key: 'me', icon: '👤', label: '我的' },
]

export default function NavBar({ active, onChange }: NavBarProps) {
  return (
    <aside className="nav-bar">
      <div className="brand">AI</div>
      <nav>
        {navItems.map((item) => (
          <button
            key={item.key}
            type="button"
            className={`nav-item${active === item.key ? ' active' : ''}`}
            onClick={() => onChange(item.key)}
            aria-label={item.label}
            title={item.label}
          >
            <span>{item.icon}</span>
          </button>
        ))}
      </nav>
    </aside>
  )
}
