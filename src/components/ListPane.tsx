import type { AppSection } from './NavBar'

export type ChatItem = {
  id: string
  name: string
  avatar: string
  preview: string
  time: string
}

export type RoleCard = {
  id: string
  name: string
  avatar: string
  favor: number
}

export type FeedPost = {
  id: string
  author: string
  avatar: string
  content: string
  likes: number
  comments: number
  time: string
}

type ListPaneProps = {
  section: AppSection
  chats: ChatItem[]
  roles: RoleCard[]
  posts: FeedPost[]
  activeId: string
  onSelect: (id: string) => void
}

export default function ListPane({ section, chats, roles, posts, activeId, onSelect }: ListPaneProps) {
  if (section === 'role') {
    return (
      <section className="list-pane">
        <header className="pane-header">角色卡</header>
        <div className="role-list">
          {roles.map((role) => (
            <button
              key={role.id}
              type="button"
              className={`role-card${activeId === role.id ? ' active' : ''}`}
              onClick={() => onSelect(role.id)}
            >
              <div className="avatar">{role.avatar}</div>
              <div>
                <div className="name">{role.name}</div>
                <div className="favor-track">
                  <span style={{ width: `${role.favor}%` }} />
                </div>
                <small>好感度 {role.favor}%</small>
              </div>
              <span className="link">编辑</span>
            </button>
          ))}
        </div>
      </section>
    )
  }

  if (section === 'feed') {
    return (
      <section className="list-pane">
        <header className="pane-header">陪伴圈</header>
        <div className="timeline-list">
          {posts.map((post) => (
            <button
              key={post.id}
              type="button"
              className={`timeline-card${activeId === post.id ? ' active' : ''}`}
              onClick={() => onSelect(post.id)}
            >
              <div className="avatar">{post.avatar}</div>
              <div>
                <div className="name">{post.author}</div>
                <p>{post.content}</p>
                <small>
                  {post.time} · 👍 {post.likes} · 💬 {post.comments}
                </small>
              </div>
            </button>
          ))}
        </div>
      </section>
    )
  }

  if (section === 'me') {
    return (
      <section className="list-pane">
        <header className="pane-header">我的</header>
        <button type="button" className="timeline-card active">
          <div className="avatar">🙂</div>
          <div>
            <div className="name">账户与偏好</div>
            <p>通知、外观、数据与隐私设置</p>
          </div>
        </button>
      </section>
    )
  }

  return (
    <section className="list-pane">
      <header className="pane-header">聊天</header>
      <div>
        {chats.map((chat) => (
          <button
            key={chat.id}
            type="button"
            className={`chat-item${activeId === chat.id ? ' active' : ''}`}
            onClick={() => onSelect(chat.id)}
          >
            <div className="avatar">{chat.avatar}</div>
            <div className="chat-meta">
              <div>
                <strong>{chat.name}</strong>
                <span>{chat.time}</span>
              </div>
              <p>{chat.preview}</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}
