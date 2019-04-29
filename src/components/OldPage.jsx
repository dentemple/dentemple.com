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
            <strong>The Speaker Series</strong> - New York, NY <br />
            <em>"Build a Node.js App w/ GraphQL"</em> (June 2019 - Upcoming)
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
            <em>"Build Your Next App in React"</em> | 2017
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
            <li>React/Redux</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Git</li>
            <li>GraphQL/Apollo</li>
            <li>HTML/CSS</li>
            <li>Jest/Mocha</li>
            <li>Atomic Design</li>
            <li>VBA</li>
          </ul>
        </article>
        <article>
          <h3>
            <strong>Experienced</strong>
          </h3>
          <ul className="chips">
            <li>Typescript</li>
            <li>Python/Django</li>
            <li>SASS/PostCSS</li>
            <li>Progressive Web Apps</li>
            <li>Webpack/Babel</li>
            <li>NoSQL</li>
            <li>PostgreSQL</li>
            <li>jQuery</li>
            <li>Bash/Linux</li>
          </ul>
        </article>
      </section>
      <section>
        <h2>Experience</h2>
        <hr />
        {/* <article>
          <h3>
            <strong>Black Wasp Tech</strong>
            <small>
              (
              <a href="https://www.linkedin.com/company/black-wasp-tech/">
                Website
              </a>
              )
            </small>
            | <em>Software Engineer</em>
          </h3>
          <ul>
            <li>

            </li>
          </ul>
        </article> */}
        <article>
          <h3>
            <strong>InRhythm Consulting Firm</strong>{' '}
            <small>
              (<a href="https://www.inrhythm.com/">Website</a>)
            </small>{' '}
            @ <strong>Goldman Sachs</strong> | <em>Software Engineer</em>
          </h3>
          <ul>
            <li>
              Built MobX methods for a React-based commodities trading app
            </li>
            <li>
              Built Typescript interfaces to statically validate React
              components for endpoints in a mono-repo
            </li>
            <li>
              Utilized PostCSS to modularize UI design for a universal
              React/OpenFin application{' '}
            </li>
            <li>
              Implemented React Router for a responsive IPO investment app
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
              Built a Node.js server with GraphQL endpoints for a startup's
              social media app
            </li>
            <li>
              Implemented Redux for a React mobile app to encapsulate data
              fetched via asynchronous API calls
            </li>
            <li>
              Implemented React Router to streamline user interaction for a U.S.
              healthcare agency
            </li>
            <li>
              Utilized CSS Foundation/Zurb to improve Shopify clients' digital
              engagement with pixel-perfect email designs
            </li>
          </ul>
        </article>
        <article>
          <h3>
            <strong>Net Driven</strong>{' '}
            <small>
              (<a href="https://www.netdriven.com/">Website</a>)
            </small>{' '}
            |<em>Front End Developer, Case Management</em>
          </h3>
          <ul>
            <li>
              Contributed HTML/CSS and jQuery components to 1,100+ live websites{' '}
            </li>
            <li>
              Optimized CSS on legacy webpages by converting image-based designs
              to Flexbox & SVB declarations{' '}
            </li>
            <li>
              Prototyped a React-based component library for future platform
              migration
            </li>
          </ul>
        </article>
        <article>
          <h3>
            <strong>Penn Foster</strong>{' '}
            <small>
              (<a href="https://www.pennfoster.edu">Website</a>)
            </small>{' '}
            | <em>Data Engineer, Strategy & Analytics</em>
          </h3>
          <ul>
            <li>
              Built a CMS in Django to refactor existing SQL Server and OracleDB
              calls made by existing VBA scripts
            </li>
            <li>
              Wrote Python scripts to feed student PostgreSQL data via cURL
              commands to a Machine Learning API
            </li>
            <li>
              Wrote VBA automation scripts to feed student SQL Server data to
              AS400 client-interfaces
            </li>
            <li>
              Built a Javascript and CSS Bootstrap data calculator for phone
              agents on an existing VB.NET platform{' '}
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
            title="View the source code on Github"
          >
            The source code can be viewed here
          </a>
          .
        </p>
      </small>
    </footer>
  </>
)

export default OldPage
