import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.headerCard}>
        <div className={styles.headerCard__content}>
          <ul className={styles.headerCard__list}>
            <li className={styles.name}>Johan Lajili</li>
            <li>Full stack software engineer</li>
            <li>Based in London, UK </li>
            <li>Typescript, NodeJS, React, Rust, AI</li>
          </ul>
        </div>

        <div className={styles.headerCard__image}>
          <Image
            src="/images/johan.jpg"
            alt="Johan Lajili"
            width={150}
            priority={true}
            height={150}
            className={styles.headerCard__image}
          />
        </div>
      </section>
      <section className={styles.keyPoints + " " + styles.javascript}>
        <div className={styles.keyPoint}>
          <div className={styles.keyPoint__icon}>
            <Image
              src="/images/old.jpg"
              alt="Old Man yells at cloud"
              className={styles.keyPoint__icon__image}
              width={100}
              height={100}
            />
            <div className={styles.keyPoint__icon__text}>
              13 Years Experience
            </div>
          </div>

          <div className={styles.keyPoint__content}>
            <p>
              From IE6 and jQuery to 
              <span className={styles.highlight}> Deno with web components</span>, not to forget my main stack:{" "}
              <span className={styles.highlight}>
                React, NodeJS and Typescript
              </span>, I've seen it all. I've worked in many industries as well
              (finance, e-learning, gambling, advertising, etc.).
            </p>
            <p>
              I've also worked in very different company types, from small startups to giant organisations: In my current position alone I
              saw the tech department{" "}
              <span className={styles.highlight}>
                grow&nbsp;from&nbsp;3&nbsp;to&nbsp;200+&nbsp;engineers in 4
                years.
              </span>
            </p>
          </div>
        </div>

        <div className={styles.keyPoint + " " + styles.rust}>
          <div className={styles.keyPoint__icon}>
            <Image
              src="/images/rust.gif"
              alt="Rust crab walking about"
              className={styles.keyPoint__icon__image}
              width={100}
              height={100}
            />
            <div className={styles.keyPoint__icon__text}>
              But still learning!
            </div>
          </div>

          <div className={styles.keyPoint__content}>
            <p>
              Despite this, I'm always learning. I've recently been working on{" "}
              <span className={styles.highlight}>AI (LLM) based projects</span>, using
              OpenAI's APIs to develop brand new ways to interact with software.
            </p>
            <p>
              My interest of the moment is{" "}
              <span className={styles.highlight}>Rust</span>, which I find
              fascinatingly elegant.
            </p>
            <p>
              But I'm also interested in learning more about{" "}
              <span className={styles.highlight}>
                Kotlin, Swift, React Native, web3 and smart contracts
              </span>{" "}
              and more should the right opportunity come along.
            </p>
          </div>
        </div>

        <div className={styles.keyPoint + " " + styles.react}>
          <div className={styles.keyPoint__icon}>
            <Image
              src="/images/london.jpg"
              alt="London Skyline"
              className={styles.keyPoint__icon__image}
              width={100}
              height={100}
            />
            <div className={styles.keyPoint__icon__text}>Open for work!</div>
          </div>

          <div className={styles.keyPoint__content}>
            <p>
              Following a merger between my current employer and another
              company, I'm now open to new opportunities in{" "}
              <span className={styles.highlight}>London</span>, including
              entirely non-remote roles.
            </p>
            <p>
              If you have a permanent position available, I'm interested in{" "}
              <span className={styles.highlight}>Staff Engineer</span> (my
              current title),{" "}
              <span className={styles.highlight}>
                Principal Engineer, Founding Engineer or Tech Lead roles
              </span>
              . I can be open to Senior or simply "Software Engineer" for the
              right company.
            </p>
          </div>
        </div>
      </section>

      <div className={styles.personal + ' ' + styles.separator} />
      <section className={styles.projects}>
        <h1> Discover some of my recent work </h1>

        <div className={styles.card + " " + styles.personal}>
          <div className={styles.card__image}>
            <Image
              src="/images/chartmylife.png"
              alt="AI"
              width={1500}
              height={500}
            />
          </div>
          <div className={styles.card__content}>
            <h2>
              <a href="https://chartmylife.ai">ChartMyLife.ai</a>
              <p className={styles.subtitle}>
                (Personal project - live - NextJS - OpenAI - TypeScript)
              </p>
            </h2>

            <p>
              A side project I have made from scratch, it offers an augmented
              Diary experience to users who can use AI to track metrics they
              care about (like calories or mood), and receive weekly insights
              from their AI coach on how to reach their goal. It offers voice
              recognition and is available as a progressive web app.
            </p>
            <p>
              It uses Next 14 (App Router with server actions etc.), Typescript,
              MongoDB, OpenAI's GPT-4 and more, and is currently live with over
              300 users.
            </p>
          </div>
        </div>

        <div className={styles.card + " " + styles.personal}>
          <div className={styles.card__image}>
            <div style={{ paddingTop: "56.25%", position: "relative" }}>
              <iframe
                src="https://player.vimeo.com/video/737834695?h=7861fb108a&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=true"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>{" "}
          </div>
          <div className={styles.card__content}>
            <h2>
              Golf/UFC/Tennis Event Centre
              <p className={styles.subtitle}>
                (IMG Arena - live - TypeScript - React - NodeJS - GraphQL -
                Websockets - RxJS - Redis - AWS - K8)
              </p>
            </h2>

            <p>
              The event centres are one of the flagship products of IMG Arena.
              I've lead their development as a full stack Tech Lead and subsequently Head of
              Web Applications.
            </p>
            <p>
              They are used by sportsbooks around the world to display
              low-latency live data, including 3D rendering and animations, and
              are used by millions of users.
            </p>
            <p>
              One of the feats of the project is to use RxJS on the backend to
              transform hundreds of source websockets into a single graphql
              subscription tree, whilst remaining performant and scalable.
            </p>
          </div>
        </div>

        <div className={styles.card + " " + styles.personal}>
          <div className={styles.card__image}>
           <Image
              src="/images/jin.jpg"
              alt="Jin's bouncing wild"
              width={500}
              height={500}
              className={styles.mobileOnly}
            />
            <iframe
              src="https://platform.gamesys.games/static-assets/gs-wrapper/index.html?country=GB&currency=GBP&gameKey=play-jins-bouncing-wilds&language=en&memberId=0&operator=jackpotjoy&partnerId=5&playMode=GUEST&sound=true&memberName=player&sessionToken=&thirdPartyGamingToken=&host=&miniGame=false&homeButton=true&profileButton=false&balancePos=left&homePos=left&cashButton=true&clock=true&gameName=false"
              title="Jin's Bouncing Wilds demo"
              frameBorder="0"
              className={styles.desktopOnly}
              loading="lazy"
              style={{
                height: "500px",
              }}
              
            ></iframe>
          </div>
          <div className={styles.card__content}>
            <h2>
              Jin's bouncing wilds
              <p className={styles.subtitle}>
                (Gamesys - live - JavaScript - PixiJS - Spine - Redux)
              </p>
            </h2>

            <p>
              Jin's bouncing wild is probably the most fun slot I made at Gamesys. It's still played today by thousands of players.
            </p>
            <p>
              Its main appeal is of course the beautiful animations, and I've worked tiredlessly to give power to the artists to animate everything themselves and be able to test it without going through the development team.
            </p>
            <p>
              It is powered by a homemade game engine using PixiJS and Redux to provide a functional and reactive approach to game development, which works particularly well for slots. It provided us with features like time travel debugging, immutability of state, automated testing etc.
            </p>
          </div>
        </div>
      </section>

      <div className={styles.react + ' ' + styles.separator} />
      <section className={styles.react + ' ' + styles.recommendations}>
        <h1> They said about me: </h1>

        <div className={styles.recommendation}>
          <div className={styles.recommendation__image}>
            <Image
              src="/images/simon.jpg"
              alt="Simon Jameson"
              width={100}
              height={100}
            />
          </div>
          <div className={styles.recommendation__content}>
            <h2>Simon Jameson (Technical Lead at Gamesys)</h2>
            <p>His pragmatic approach to technical problem solving has given the company many new tools and processes that benefit others as much as his immediate team. He's an incredibly talented developer with a passion for what he does and would make an excellent addition to any team lucky enough to have him.</p>
          </div>
        </div>
      </section>

      <div className={styles.personal + ' ' + styles.separator} />
      <section className={styles.personal + ' ' + styles.contact}>
        <h1> Contact me!</h1>

        <p>
          I'm currently looking for a new permanent role in London, UK. If you think I could be a good fit for you and your team, by all mean please contact me at:          
        </p>
          <ul>
            <li><div className={styles.linkLabel}>LinkedIn</div> <div><a href="https://www.linkedin.com/in/johanlajili/">https://www.linkedin.com/in/johanlajili/</a></div></li>
            <li><div className={styles.linkLabel}>Email</div> <div><a href="mailto:johan.lajili@gmail.com">johan.lajili@gmail.com</a></div></li>
            <li><div className={styles.linkLabel}>Phone</div> <div><a href="tel:+447492558533">+44 (0)7492558533</a></div></li>
          </ul>
      </section>
    </main>
  );
}
