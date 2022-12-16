import styles from '../styles/Footer.module.scss'

export const Footer = () => {

    const footerMenu = [
        {
            title: 'Support', 
            menuItems: ['Help Center', 'AirCover', 'Supporting people with disabilities',
                'Cancellation options', 'Our COVID-19 Response', 'Report a neighborhood concern'
            ]
        },
        {
            title: 'Community', 
            menuItems: ['Airbnb.org: disaster relief housing', 'Combating discrimination']
        },
        {
            title: 'Hosting',
            menuItems: ['Airbnb your home', 'AirCover for Hosts', 'Explore hosting resources',
            'Visit our community forum', 'How to host responsibly']
        },
        {
            title: 'Airbnb', 
            menuItems: ['Newsroom', 'Learn about new features', 'Letter from our founders',
                'Careers', 'Investors', 'Gift cards']
        }
    ]

    return (
        <div className={styles.footer}>
            
            {
                footerMenu.map( (m, i) => {
                    return <div className={styles.menu} key={i}>
                        <h6>{m.title}</h6>
                        <ul>
                        {
                            m.menuItems.map( (e, i) => {
                                return <li key={i}>{e}</li>
                            })
                        }
                        </ul>
                    </div>
                })
            } 
            
        </div>
    )
}