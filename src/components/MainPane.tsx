import { useMemo } from 'react'
import type { AppSection } from './NavBar'
import type { ChatItem, FeedPost, RoleCard } from './ListPane'

type Message = {
  id: string
  from: 'me' | 'role'
  text: string
}

type MainPaneProps = {
  section: AppSection
  chats: ChatItem[]
  roles: RoleCard[]
  posts: FeedPost[]
  activeId: string
  drawerOpen: boolean
  onToggleDrawer: () => void
  showDrama: boolean
  mute: boolean
  favor: number
  onToggleDrama: () => void
  onToggleMute: () => void
  onFavorChange: (value: number) => void
}

const messages: Message[] = [
  { id: 'm1', from: 'role', text: '今天过得怎么样？我给你准备了新的故事线。' },
  { id: 'm2', from: 'me', text: '有点累，想听点轻松的剧情。' },
  { id: 'm3', from: 'role', text: '收到～我们从小剧场「雨夜便利店」开始。' },
]

export default function MainPane({
  section,
  chats,
  roles,
  posts,
  activeId,
  drawerOpen,
  onToggleDrawer,
  showDrama,
  mute,
  favor,
  onToggleDrama,
  onToggleMute,
  onFavorChange,
}: MainPaneProps) {
  const activeChat = useMemo(() => chats.find((item) => item.id === activeId) ?? chats[0], [activeId, chats])
  const activeRole = useMemo(() => roles.find((item) => item.id === activeId) ?? roles[0], [activeId, roles])
  const activePost = useMemo(() => posts.find((item) => item.id === activeId) ?? posts[0], [activeId, posts])

  if (section === 'role') {
    return (
      <main className="main-pane">
        <header className="main-header">{activeRole.name} · 角色详情</header>
        <section className="detail-card">
          <div className="hero-cover">{activeRole.avatar}</div>
          <h2>{activeRole.name}</h2>
          <p>温柔理性，擅长陪伴与剧情共创。当前关系稳定上升中。</p>
          <div className="favor-track lg">
            <span style={{ width: `${activeRole.favor}%` }} />
          </div>
          <small>好感度：{activeRole.favor}%</small>
          <div className="chapter-row">
            <button type="button">相遇篇</button>
            <button type="button">日常篇</button>
            <button type="button">心动篇</button>
          </div>
        </section>
      </main>
    )
  }

  if (section === 'feed') {
    return (
      <main className="main-pane">
        <header className="main-header">动态详情</header>
        <section className="detail-card">
          <h2>{activePost.author}</h2>
          <p>{activePost.content}</p>
          <small>{activePost.time}</small>
          <div className="comments">
            <p>💬 你：今天状态看起来很好～</p>
            <p>💬 {activePost.author}：谢谢，有你陪伴就很安心。</p>
          </div>
          <input className="input" placeholder="写下评论..." />
        </section>
      </main>
    )
  }

  if (section === 'me') {
    return (
      <main className="main-pane">
        <header className="main-header">我的</header>
        <section className="detail-card">
          <h2>个人中心</h2>
          <p>这里预留给账号信息、皮肤主题、提醒偏好等入口。</p>
          <div className="chapter-row">
            <button type="button">账号设置</button>
            <button type="button">隐私设置</button>
            <button type="button">外观设置</button>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="main-pane">
      <header className="main-header">
        <span>{activeChat.name}</span>
        <button type="button" className="accent" onClick={onToggleDrawer}>
          会话设置
        </button>
      </header>

      <section className="chat-window">
        {messages.map((item) => (
          <div key={item.id} className={`bubble-row ${item.from}`}>
            <div className="bubble">{item.text}</div>
          </div>
        ))}
        {showDrama && <div className="drama-card">🎬 小剧场：雨夜便利店 · 点击可继续剧情</div>}
      </section>

      <footer className="composer">
        <input className="input" placeholder="输入消息，支持 /剧情 /建议" />
        <button type="button" className="accent">
          发送
        </button>
      </footer>

      <aside className={`drawer${drawerOpen ? ' open' : ''}`}>
        <h3>会话设置</h3>
        <label>
          <span>显示小剧场</span>
          <input type="checkbox" checked={showDrama} onChange={onToggleDrama} />
        </label>
        <label>
          <span>消息免打扰</span>
          <input type="checkbox" checked={mute} onChange={onToggleMute} />
        </label>
        <label>
          <span>好感度 {favor}</span>
          <input type="range" min={0} max={100} value={favor} onChange={(e) => onFavorChange(Number(e.target.value))} />
        </label>
        <button type="button" className="danger">
          重开对话
        </button>
      </aside>
    </main>
  )
}
