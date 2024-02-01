/* eslint-disable no-template-curly-in-string */
const config = {
  branches: ['master', 'develop'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    // [
    //   "semantic-release-slack-bot",
    //   {
    //     "notifyOnSuccess": true,
    //     "notifyOnFail": true,
    //     "slackWebhook": "{slackWebhookUrl}", #paste slack incoming web hook url here.
    //     "branchesConfig": [
    //       {
    //         "pattern": "master",
    //         "notifyOnSuccess": true,
    //         "notifyOnFail": true
    //       }
    //     ]
    //   }
    // ],
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'docs/CHANGELOG.md',
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['dist/*.js', 'dist/*.js.map', 'docs/CHANGELOG.md'],
        message:
          'chore(release): ${nextRelease.version} \n\n🚀🚀🚀 **Release ${nextRelease.version}**🚀🚀🚀\n\n🎉 Exciting new features and improvements are here! 🌟\n\n💪 Always on a grind, you know me! 😉\n\n📝 Full Release Notes:\n${nextRelease.notes}',
      },
    ],
    '@semantic-release/github',
    'semantic-release-github-actions-tags',
  ],
};

module.exports = config;
