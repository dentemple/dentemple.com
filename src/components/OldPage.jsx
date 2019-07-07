import React from 'react'

const OldPage = () => (
  <>
    <header>
      <h1>Need a Web Developer?</h1>
      <p>My name's Denny, and I can build what you need.</p>
      <h2>Software Engineer with 5+ years experience.</h2>
      <p>
        <strong>
          Available today for feature-rich functionality for any platform.
        </strong>
      </p>
      <p>
        I specialize in building scalable, production-level applications with
        Javascript. I've given several public talks on React and modern web
        practices, and made several open-source contributions to GraphQL
        libraries on <code>npm</code>.
      </p>
      <section>
        <h2>Public Talks</h2>
        <hr />
        <article>
          <p>
            <a
              href="https://www.meetup.com/InRhythmU/events/260120621/"
              rel="noopener noreferrer">
              <strong>The Speaker Series</strong> - New York, NY
            </a>{' '}
            <br />
            <em>"Build a Node.js App w/ GraphQL"</em> (June 2019)
          </p>
        </article>
        <article>
          <p>
            <strong>Verizon HQ</strong> - Basking Ridge, NJ <br />
            <em>"Learn React - 3 Day Workshop"</em> (2018)
          </p>
        </article>
        <article>
          <p>
            <strong>Build with Code</strong> - New York, NY <br />
            <em>"No Time to REST: Transitioning an API to GraphQL"</em> (2018)
          </p>
        </article>
        <article>
          <p>
            <strong>NEPA Tech</strong> - Scranton, PA <br />
            <em>"Build Your Next App in React"</em> (2017)
          </p>
        </article>
      </section>
    </header>
    <div>
      <section>
        <h2>Skills</h2>
        <hr />
        <article>
          <h3>
            <strong>Strong</strong>
          </h3>
          <ul className="chips">
            <li>Javascript ES6+</li>
            <li>React</li>
            <li>Redux/MobX</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>NoSQL</li>
            <li>Webpack</li>
            <li>HTML5</li>
            <li>CSS/Flexbox</li>
            <li>Atomic Design</li>
          </ul>
        </article>
        <article>
          <h3>
            <strong>Experienced</strong>
          </h3>
          <ul className="chips">
            <li>Typescript</li>
            <li>Python</li>
            <li>Django</li>
            <li>VB/VBA</li>
            <li>GraphQL</li>
            <li>PostgreSQL</li>
            <li>jQuery</li>
            <li>Linux/Bash</li>
            <li>Git/Github</li>
            <li>CI/CD</li>
          </ul>
        </article>
      </section>
      <section>
        <h2>Experience</h2>
        <hr />
        <article>
          <h3>
            <a href="https://getbento.com/">
              <strong>BentoBox</strong>
            </a>{' '}
            | <em>Senior Software Engineer</em>
          </h3>
        </article>
        <br />

        <article>
          <h3>
            <a href="https://www.inrhythm.com/">
              <strong>InRhythm Consulting Firm</strong>
            </a>{' '}
            @ <strong>Goldman Sachs</strong> | <em>Senior Software Engineer</em>
          </h3>
          <ul>
            <li>
              Wrote Typescript interfaces to statically validate state and props
              for React components during a major build-tool upgrade, validating
              library components and eliminating runtime errors for a
              consumer-facing commodities-trading application
            </li>
            <li>
              Wrote MobX methods using Javascript’s decorator and class feature
              to handle real-time stock trading quotes, utilizing a reactive OOP
              approach for updating the UI based on live socket connection data
            </li>
            <li>
              Built Node.js modules using Mocha and Supertest as part of an
              internal initiative to train Java engineers on full-stack
              Javascript, using TDD methods to validate answers built around a
              series of lessons on core backend principles
            </li>
            <li>
              Implemented React Router by building protected routes and
              rendering UI based on match and location data, utilizing the
              library’s declarative syntax to eliminate technical debt leftover
              from prior attempts to imperatively control the History API
            </li>
          </ul>
        </article>
        <article>
          <h3>
            <strong>Den Temple Engineering</strong> |{' '}
            <em>Full Stack Engineer, Freelance</em>
          </h3>
          <ul>
            <li>
              Built a Node.js server with GraphQL endpoints to eliminate
              unnecessary API requests for a UK-based social media app
            </li>
            <li>
              Implemented Redux to a mobile-first React app using async thunks
              and smart containers for a U.S. political organization
            </li>
            <li>
              Utilized the Foundation/Zurb CSS framework to build responsive
              email designs for a Shopify-based apparel agency
            </li>
          </ul>
        </article>
        <article>
          <h3>
            <a href="https://www.netdriven.com/">
              <strong>Net Driven</strong>
            </a>{' '}
            | <em>Front End Developer, Case Management</em>
          </h3>
          <ul>
            <li>
              Contributed HTML/CSS/JS components to 1,100+ live websites based
              on Photoshop design boards and client requests
            </li>
            <li>
              Converted images to CSS declarations on legacy webpages to
              optimize page load speed and improve web accessibility
            </li>
            <li>
              Built a React component library to prototype DotNetNuke templates
              migrated to a more modern Atomic Design approach
            </li>
          </ul>
        </article>
        <article>
          <h3>
            <a href="https://www.pennfoster.edu">
              <strong>Penn Foster</strong>
            </a>{' '}
            | <em>Data Engineer, Strategy & Analytics</em>
          </h3>
          <ul>
            <li>
              Built a CMS in Django to refactor existing SQL Server/OracleDB
              scripts into a single C-Suite app for predictive analytics
            </li>
            <li>
              Wrote Python scripts to feed PostgreSQL data first to Excel for
              cleaning, then to a Machine Learning API for processing
            </li>
            <li>
              Built VBA scripts using OOP patterns to automate I/O between Excel
              userforms and IBM AS/400 client interfaces
            </li>
            <li>
              Utilized Javascript and CSS Bootstrap to build a UI that handles
              domain-specific calculations for live call-center agents
            </li>
          </ul>
        </article>
      </section>
      <section>
        <h2>Education</h2>
        <hr />
        <p>
          <strong>Codesmith</strong> | <em>Open Source Software Residency</em>
        </p>
        <p>
          <strong>University of Scranton</strong>
        </p>
      </section>
      <section>
        <h2>Interests</h2>
        <hr />
        <p>I'm also a published poet and a 10-year NaNoWriMo participant.</p>
        <p>
          I prefer Turkish Coffee, watch seasonally-airing anime, and watching
          disaster videos on Youtube.
        </p>
      </section>
      <section>
        <h2 id="contact">Contact</h2>
        <hr />
        <h3>
          <strong>Get in touch with me today:</strong>
        </h3>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/dentemple/" title="LinkedIn">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://twitter.com/dentemple" title="Twitter">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://angel.co/dentemple" title="AngelList">
              AngelList
            </a>
          </li>
          <li>
            <a href="https://github.com/dentemple" title="Github">
              Github
            </a>
          </li>
          <li>
            <a href="mailto:dev@dentemple.com" title="dev@dentemple.com">
              Email
            </a>
          </li>
        </ul>
      </section>
    </div>
    <footer>
      <small>
        <p>
          <strong>© 2018 Denny S. Temple</strong>
        </p>
        <p>
          This website is open sourced under the{' '}
          <a href="https://opensource.org/licenses/MIT">MIT License</a>.
        </p>
        <p>
          <a href="https://dentemple.com">dentemple.com</a> does not install any
          tracking software or collect any data.
        </p>
        <p>
          <a
            href="https://github.com/dentemple/dentemple.com"
            title="View the source code on Github">
            The source code can be viewed here
          </a>
          .
        </p>
      </small>
    </footer>
  </>
)

export default OldPage
