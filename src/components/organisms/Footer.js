import styles from '../styles/Footer.module.scss'

export const Footer = () => {

    const footerMenu = [
        {
            title: 'Support', 
            menuItems: ['Help Center', 'Insurance', 'Supporting people with disabilities',
                'Cancellation options', 'Our COVID-19 Response', 'Report a neighborhood concern'
            ]
        },
        {
            title: 'Community', 
            menuItems: ['Social responsability', 'Combating discrimination']
        },
        {
            title: 'Hosting',
            menuItems: ['Rent your home', 'Insurance for Hosts', 'Explore hosting resources',
            'Visit our community forum', 'How to host responsibly']
        },
        {
            title: 'Information', 
            menuItems: ['Newsroom', 'Learn about new features', 'Letter from our founders',
                'Careers', 'Investors', 'Gift cards']
        }
    ]

    return (
        <div className={styles.footer}>
            <div className={styles.menuContainer}>
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

            <div className={styles.link}>
                <span>Visit my other projects at: </span>
                <span>
                    <a href="https://sandrosimon.com" target="_blank" rel="noopener noreferrer"> sandrosimon.com</a>
                </span>
            </div>
            
        </div>
    )
}