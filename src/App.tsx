import { useState } from 'react'
import { Header } from './components/Header'

import './global.css'
import styles from './App.module.css'

import { Sidebar } from './components/Sidebar.js'
import { Post } from './components/Post'

function App() {

  const posts = [
    {
        id: 1,
        author: {
            avatarUrl: "https://github.com/lincolnzera1.png",
            name: "Guilherme Lincoln",
            role: "Software engineer"
        },
        content: [
            {type: "paragraph", content: "Fala gente!"},
            {type: "paragraph", content: "Meu github recentemente completou 30 repositórios!"},
            {type: "link", content: "Acesse https://github.com/lincolnzera1 para ver."}
        ],
        publishedAt: new Date('2022-09-15 19:29:00'),
    },
    {
        id: 2,
        author: {
            avatarUrl: "https://github.com/FelipeLTavares.png",
            name: "Felipe Tavares",
            role: "Software intern"
        },
        content: [
            {type: "paragraph", content: "Fala gente!"},
            {type: "paragraph", content: "Meu github recentemente completou 30 repositórios!"},
            {type: "link", content: "Acesse https://github.com/FelipeLTavares para ver."}
        ],
        publishedAt: new Date('2022-09-16 19:29:00'),
    },
]

  return (
    <div className="App">
      
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )

  
}

export default App
