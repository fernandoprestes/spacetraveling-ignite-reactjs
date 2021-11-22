import { FiCalendar, FiClock, FiUser } from 'react-icons/fi';
import Header from '../../components/Header';
import commonStyles from '../../styles/common.module.scss';
import styles from './post.module.scss';



interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

export default function Post({ post }: PostProps) {
  return (
    <>
      <Header />
      <img className={styles.banner} src="" alt="banner" />
      <main className={commonStyles.container}>
        <section className={styles.post}>
          <header className={styles.header}>
            <h1>Titulo grande de exemplo</h1>
            <ul>
              <li>
                <FiCalendar /> 12 mar 2512
              </li>
              <li>
                <FiUser /> Alexa
              </li>
              <li>
                <FiClock /> 5 min
              </li>
            </ul>
          </header>
          <article>
            <h2>Titulo secation</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, dolores iure voluptatem repudiandae id laborum quisquam
              reiciendis? Accusamus quod tenetur distinctio, totam
              exercitationem in minus corporis alias maiores et tempore.
            </p>
          </article>
        </section>
      </main>
    </>
  );
}

// export const getStaticPaths = async () => {
//   const prismic = getPrismicClient();
//   const posts = await prismic.query(TODO);

//   // TODO
// };

// export const getStaticProps = async context => {
//   const prismic = getPrismicClient();
//   const response = await prismic.getByUID(TODO);

//   // TODO
// };
