import React from 'react'
import FaExternalLink from 'react-icons/lib/fa/external-link'
import FaTwitter from 'react-icons/lib/fa/twitter'
import FaLinkedIn from 'react-icons/lib/fa/linkedin-square'
import FaMedium from 'react-icons/lib/fa/medium'
import FaGithub from 'react-icons/lib/fa/github'
import FaList from 'react-icons/lib/fa/list'
import FaRefresh from 'react-icons/lib/fa/refresh'

/* Constant Icon Components */
export const GithubIcon = <FaGithub aria-hidden="true" />
export const ListIcon = <FaList aria-hidden="true" />

/* Functional Icon Components */
export const ExternalLinkIcon = () => <FaExternalLink aria-hidden="true" />
export const Refresh = () => <FaRefresh />

/* Custom Functional Icon Components */
export const Twitter = () => (
  <span>
    <FaTwitter aria-hidden="true" />
  </span>
)
export const LinkedIn = () => (
  <span>
    <FaLinkedIn aria-hidden="true" />
  </span>
)
export const Medium = () => (
  <span>
    <FaMedium aria-hidden="true" />
  </span>
)
