import { useContext, useState } from 'react'
import { ChallengesContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/Profile.module.css'

export function Profile(){
    const {level} = useContext(ChallengesContext);
    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/54087058?s=400&u=309296fb4972cea37e754ee52c753663ffbc23bd&v=4" alt="Reuel Freitas"></img>
            <div>
            <strong>Reuel Freitas</strong>
            <p>
                <img src="icons/level.svg" alt="Level"/>
                Level {level}
            </p>
        </div>
        </div>
    )
}