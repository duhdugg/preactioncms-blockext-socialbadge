## Social Badge Block Extension for Preaction CMS

This is a block extension for [Preaction CMS](https://github.com/duhdugg/preaction-cms)
for displaying links to your social media profiles.

## Installation from Source

1. Clone this repo and build.
```bash
git clone https://github.com/duhdugg/preactioncms-blockext-socialbadge
cd preactioncms-blockext-socialbadge
yarn && yarn build
```
2. Copy the files from the `dist` directory into your `preaction-cms/src/ext` directory.
3. Register the block extension in `preaction-cms/src/ext/index.js`.
```javascript
import React, { Suspense } from 'react'
import { Spinner  } from '@preaction/bootstrap-clips'
const SocialBadge = React.lazy(() =>
  import('./preactioncms-blockext-socialbadge.esm.js')
)
const SocialBadgeSettings = React.lazy(() =>
  import('./preactioncms-blockext-socialbadge-settings.esm.js')
)
const blockExtensions = {
  SocialBadge: function (props) {
    return (
      <Suspense fallback={<Spinner size={3.25} />}>
        <SocialBadge {...props} />
      </Suspense>
    )
  },
}
const blockExtensionSettings = {
  SocialBadgeSettings: function (props) {
    return (
      <Suspense fallback={<Spinner size={3.25} />}>
        <SocialBadgeSettings {...props} />
      </Suspense>
    )
  },
}
blockExtensions.SocialBadge.extensionType = 'block'
blockExtensions.SocialBadge.label = 'Social Badges'
blockExtensions.SocialBadge.Settings =
  blockExtensionSettings.SocialBadgeSettings
// ...
```
4. Execute `yarn build` in your `preaction-cms` directory.

You should now see a "Social Badges" option in the "Add Block" menus.
