import React from 'react'
import PropTypes from 'prop-types'
import { Input } from '@preaction/inputs'
import {
  FaDev,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from 'react-icons/fa'

const icons = {
  dev: FaDev,
  facebook: FaFacebookSquare,
  github: FaGithubSquare,
  instagram: FaInstagramSquare,
  linkedin: FaLinkedin,
  twitter: FaTwitterSquare,
}

const labels = {
  dev: 'DEV.to',
  facebook: 'Facebook',
  github: 'GitHub',
  instagram: 'Instagram',
  linkedin: 'LinkedIn',
  twitter: 'Twitter',
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
              rel='noreferrer noopener'
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
  twitter: '',
  size: '3',
}

function SocialBadgeSettings(props) {
  return (
    <div>
      <h6>Social Badge Settings</h6>
      <hr className='mb-3' />
      <Input
        type='range'
        label='Size'
        min='2'
        max='10'
        value={props.propsData.size || '3'}
        valueHandler={props.getPropsDataValueHandler('size')}
      />
      <Input
        type='url'
        label='DEV URL'
        labelFloat
        value={props.propsData.dev}
        valueHandler={props.getPropsDataValueHandler('dev')}
      />
      <Input
        type='url'
        label='Facebook URL'
        labelFloat
        value={props.propsData.facebook}
        valueHandler={props.getPropsDataValueHandler('facebook')}
      />
      <Input
        type='url'
        label='GitHub URL'
        labelFloat
        value={props.propsData.github}
        valueHandler={props.getPropsDataValueHandler('github')}
      />
      <Input
        type='url'
        label='Instagram URL'
        labelFloat
        value={props.propsData.instagram}
        valueHandler={props.getPropsDataValueHandler('instagram')}
      />
      <Input
        type='url'
        label='LinkedIn URL'
        labelFloat
        value={props.propsData.linkedin}
        valueHandler={props.getPropsDataValueHandler('linkedin')}
      />
      <Input
        type='url'
        label='Twitter URL'
        labelFloat
        value={props.propsData.twitter}
        valueHandler={props.getPropsDataValueHandler('twitter')}
      />
    </div>
  )
}

SocialBadgeSettings.propTypes = {
  propsData: PropTypes.object.isRequired,
  getPropsDataValueHandler: PropTypes.func.isRequired,
}

SocialBadge.Settings = SocialBadgeSettings

export { SocialBadge }
