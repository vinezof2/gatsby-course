import styled from "styled-components"
import media from "styled-media-query"

export const SocialLinksWrapper = styled.nav`
  width: 100%;
  margin: 2rem auto;

  ${media.lessThan("large")`
    display: none;
  `}
`

export const SocialLinksList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
`

export const SocialLinksItem = styled.li``

export const SocialLinksLink = styled.a`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: var(--highlight);
  }
`

export const IconWrapper = styled.div`
  width: 30px;
  height: 30px;
  fill: #bbb;
`
