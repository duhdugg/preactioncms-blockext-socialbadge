import React from 'react'
import PropTypes from 'prop-types'
import {
  FaDev,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaMastodon,
  FaTwitterSquare,
  FaYoutubeSquare,
} from 'react-icons/fa'

const icons = {
  dev: FaDev,
  facebook: FaFacebookSquare,
  github: FaGithubSquare,
  instagram: FaInstagramSquare,
  linkedin: FaLinkedin,
  mastodon: FaMastodon,
  twitter: FaTwitterSquare,
  youtube: FaYoutubeSquare,
}

const labels = {
  dev: 'DEV.to',
  facebook: 'Facebook',
  github: 'GitHub',
  instagram: 'Instagram',
  linkedin: 'LinkedIn',
  mastodon: 'Mastodon',
  twitter: 'Twitter',
  youtube: 'Youtube',
}

function SocialBadge(props) {
  const badges = []
  for (let key of Object.keys(icons)) {
    if (props[key]) {
      badges.push({
        key,
        url: props[key],
        Icon: icons[key],
        label: labels[key],
      })
    }
  }
  return (
    <div className='social-badge'>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {badges.map((badge) => {
          const { key, url, Icon, label } = badge
          return (
            <a
              className={`${key}-badge`}
              href={url}
              key={key}
              rel='me noreferrer noopener'
              style={{ display: 'block' }}
              target='_blank'
            >
              <Icon
                aria-label={label}
                style={{
                  width: `${props.size}em`,
                  height: `${props.size}em`,
                }}
              />
            </a>
          )
        })}
      </div>
    </div>
  )
}

SocialBadge.propTypes = {
  dev: PropTypes.string,
  facebook: PropTypes.string,
  github: PropTypes.string,
  instagram: PropTypes.string,
  linkedin: PropTypes.string,
  mastodon: PropTypes.string,
  preaction: PropTypes.object.isRequired,
  size: PropTypes.string,
  twitter: PropTypes.string,
}

SocialBadge.extensionType = 'block'
SocialBadge.label = 'Social Badges'
SocialBadge.defaultProps = {
  dev: '',
  facebook: '',
  github: '',
  instagram: '',
  linkedin: '',
  mastodon: '',
  twitter: '',
  size: '3',
}

export default SocialBadge
