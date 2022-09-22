import styles from './Comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import { useState } from 'react'

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({content, onDeleteComment}: CommentProps) {

    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    return (
        <div className={styles.comment}>
            <Avatar 
            hasBorder={false} 
            src="https://avatars.githubusercontent.com/u/88245209?v=4"
            alt=""
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Guilherme Lincoln</strong>
                            <time title='15 de maio' dateTime='2022-09-15 15:30:30'>Cerca de 1h atrás</time>
                            
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                                
                                <Trash size={24}/>
                            </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={() => setLikeCount(likeCount + 1)} >
                        <ThumbsUp />
                        Aplaudir <span>{likeCount} </span>
                    </button>
                </footer>
            </div>
        </div>
    )
}