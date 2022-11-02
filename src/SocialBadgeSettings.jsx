import React from 'react'
import PropTypes from 'prop-types'
import { Input } from '@preaction/inputs'

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
        label='Mastodon URL'
        labelFloat
        value={props.propsData.mastodon}
        valueHandler={props.getPropsDataValueHandler('mastodon')}
      />
      <Input
        type='url'
        label='Twitter URL'
        labelFloat
        value={props.propsData.twitter}
        valueHandler={props.getPropsDataValueHandler('twitter')}
      />
      <Input
        type='url'
        label='Youtube URL'
        labelFloat
        value={props.propsData.youtube}
        valueHandler={props.getPropsDataValueHandler('youtube')}
      />
    </div>
  )
}

SocialBadgeSettings.propTypes = {
  propsData: PropTypes.object.isRequired,
  getPropsDataValueHandler: PropTypes.func.isRequired,
}

export default SocialBadgeSettings
