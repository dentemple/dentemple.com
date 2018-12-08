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
        My specialty is with building scalable React and NodeJS apps. I'm noted
        for publishing open-source GraphQL libraries to <code>npm</code>,
        writing Python and SQL automation scripts for a mid-sized call center,
        and deploying UI components to 980+ automotive industry websites.
      </p>
      <section>
        <h2>Public Talks</h2>
        <hr />
        <article>
          <p>
            <strong>Build with Code - New York</strong> <br />
            <em>"No Time to REST: Transitioning an API to GraphQL"</em> (2018)
          </p>
        </article>
        <article>
          <p>
            <strong>NEPA Tech</strong> <br />
            <em>"Build Your Next App in React"</em> (2017)
          </p>
        </article>
      </section>
    </header>
    <main>
      <section>
        <h2>Skills</h2>
        <hr />
        <article>
          <h3>
            <strong>Strong</strong>
          </h3>
          <ul className="chips">
            <li>Javascript</li>
            <li>React</li>
            <li>Redux</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>PostgreSQL</li>
            <li>VBA</li>
            <li>HTML/CSS</li>
            <li>Flexbox</li>
            <li>Jest</li>
          </ul>
        </article>
        <article>
          <h3>
            <strong>Experienced</strong>
          </h3>
          <ul className="chips">
            <li>GraphQL</li>
            <li>Webpack</li>
            <li>Babel</li>
            <li>BCrypt</li>
            <li>NoSQL</li>
            <li>Mocha</li>
            <li>jQuery</li>
            <li>Python</li>
            <li>Django</li>
            <li>Bash/Linux</li>
          </ul>
        </article>
      </section>
      <section>
        <h2>Experience</h2>
        <hr />
        <article>
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
              Reduced GraphQL API response latency by building a series of
              micro-libraries to handle calls w/o dramatically increasing bundle
              sizes
            </li>
            <li>Automated GraphQL queries with custom Redux middleware</li>
            <li>
              Encapsulated GraphQL requests with Promise-based methods to
              provide a developer-friendly API
            </li>
            <li>
              Encapsulated GraphQL requests with Promise-based methods to
              provide a framework-agnostic, developer-friendly API
            </li>
          </ul>
        </article>
        <article>
          <h3>
            <strong>Den Temple Engineering</strong> |
            <em>Full Stack Engineer</em>
          </h3>
          <ul>
            <li>
              Bootstrapped a social media MVP with Node.js, React, and GraphQL
              for a UK-based organization
            </li>
            <li>
              Developed React-Redux components for a US-based political agency
            </li>
            <li>
              Resolved React scalability issues for a Washington-based
              health-care agency
            </li>
            <li>
              Utilized Foundation to generate CSS designs for several clients on
              the Shopify platform
            </li>
          </ul>
        </article>
        <article>
          <h3>
            <strong>Net Driven</strong>
            <small>
              (<a href="https://www.netdriven.com/">Website</a>)
            </small>{' '}
            |<em>Front End Engineer</em>
          </h3>
        </article>
        <article>
          <h3>
            <strong>Penn Foster</strong>
            <small>
              (<a href="https://www.pennfoster.edu">Website</a>)
            </small>{' '}
            |<em>Analyst Programmer</em>
          </h3>
        </article>
      </section>
      <section>
        <h2>Education</h2>
        <hr />
        <p>
          <strong>Codesmith</strong> |
          <em>Open Source Residency for Experienced Programmers</em>
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
          I also drink Turkish Coffee, watch seasonally-airing anime, and enjoy
          building my own games.
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
    </main>
    <footer>
      <small>
        <p>
          <strong>© 2018 Denny S. Temple</strong>
        </p>
        <p>
          This website is open sourced under the
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
