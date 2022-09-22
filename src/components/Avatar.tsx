import styles from './Avatar.module.css'
import { ImgHTMLAttributes } from 'react'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
}

export function Avatar({/* src */hasBorder = true, ...props }: AvatarProps){

    return(
        <div>
            <img //src={src} 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            /* alt={alt}
            title={title}
            onClick={onClick} */
            {...props}
            />
        </div>
    )
}