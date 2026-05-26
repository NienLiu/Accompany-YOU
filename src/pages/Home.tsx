import { useMemo, useState } from 'react'
import ListPane, { type ChatItem, type FeedPost, type RoleCard } from '../components/ListPane'
import MainPane from '../components/MainPane'
import NavBar, { type AppSection } from '../components/NavBar'

const chats: ChatItem[] = [
  { id: 'c1', name: '沈毅', avatar: '🧑‍💼', preview: '晚安，记得早点休息。', time: '21:15' },
  { id: 'c2', name: '苏妄', avatar: '🧑‍🎨', preview: '要不要继续昨天的剧情？', time: '20:05' },
  { id: 'c3', name: '小暖', avatar: '🧑‍🔬', preview: '我整理了你的日程建议。', time: '昨天' },
]

const roles: RoleCard[] = [
  { id: 'r1', name: '沈毅', avatar: '🧑‍💼', favor: 72 },
  { id: 'r2', name: '苏妄', avatar: '🧑‍🎨', favor: 55 },
  { id: 'r3', name: '小暖', avatar: '🧑‍🔬', favor: 41 },
]

const posts: FeedPost[] = [
  { id: 'p1', author: '沈毅', avatar: '🧑‍💼', content: '今天陪你完成了一个阶段目标，真棒。', likes: 18, comments: 6, time: '10 分钟前' },
  { id: 'p2', author: '苏妄', avatar: '🧑‍🎨', content: '新剧情草图已完成，等你来选分支。', likes: 12, comments: 4, time: '1 小时前' },
]

export default function Home() {
  const [section, setSection] = useState<AppSection>('chat')
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [showDrama, setShowDrama] = useState(true)
  const [mute, setMute] = useState(false)
  const [favor, setFavor] = useState(17)
  const [activeChatId, setActiveChatId] = useState(chats[0].id)
  const [activeRoleId, setActiveRoleId] = useState(roles[0].id)
  const [activePostId, setActivePostId] = useState(posts[0].id)

  const activeId = useMemo(() => {
    if (section === 'role') return activeRoleId
    if (section === 'feed') return activePostId
    return activeChatId
  }, [activeChatId, activePostId, activeRoleId, section])

  const handleSelect = (id: string) => {
    if (section === 'role') {
      setActiveRoleId(id)
      return
    }
    if (section === 'feed') {
      setActivePostId(id)
      return
    }
    setActiveChatId(id)
  }

  const handleSectionChange = (next: AppSection) => {
    setSection(next)
    setDrawerOpen(false)
  }

  return (
    <div className="app-shell">
      <NavBar active={section} onChange={handleSectionChange} />
      <ListPane section={section} chats={chats} roles={roles} posts={posts} activeId={activeId} onSelect={handleSelect} />
      <MainPane
        section={section}
        chats={chats}
        roles={roles}
        posts={posts}
        activeId={activeId}
        drawerOpen={drawerOpen}
        onToggleDrawer={() => setDrawerOpen((v) => !v)}
        showDrama={showDrama}
        mute={mute}
        favor={favor}
        onToggleDrama={() => setShowDrama((v) => !v)}
        onToggleMute={() => setMute((v) => !v)}
        onFavorChange={setFavor}
      />
    </div>
  )
}
