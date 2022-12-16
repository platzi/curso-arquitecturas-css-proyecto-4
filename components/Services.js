import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa"
import { Title } from "./Title"
import styles from '../styles/Services.module.scss'

export const Services = () =>  {
  
    const services= [
        {
            icon: <FaCocktail />,
            title: "Free Cocktails",
            info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
        },

        {
            icon: <FaHiking />,
            title: "Endless Hiking",
            info:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
        },

        {
            icon: <FaShuttleVan />,
            title: "Free Shuttle",
            info:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
        },

        {
            icon: <FaBeer />,
            title: "Strongest Beer",
            info:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
        }
    ]
    
    return (
        <section className={styles.services}>
            <Title title="services" />
            <div className={styles.servicesCenter}> 
            {
                services.map(item => {
                return (
                    <article key={`item-${item.title}`} className={styles.service}>
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                );
            })}
            </div>
        </section>
    );
  
}