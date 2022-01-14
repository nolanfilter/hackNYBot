
'use strict'

const _ = require('lodash')
const config = require('../config')
const trending = require('github-trending')

const msgDefaults = {
  response_type: 'in_channel',
  username: 'hackNY Bot',
  icon_emoji: config('ICON_EMOJI')
}

let attachments = [
  {
    title: 'hackNY Code of Conduct',
    color: '#ff0d00',
    text: 'https://docs.google.com/document/d/1QrqwO4sRrDdLga3iROksF6Pchn03l3ZcnBD3OGstg88/edit?usp=sharing',
    mrkdwn_in: ['text']
  }
]

const handler = (payload, res) => {
  let msg = _.defaults({
    channel: payload.channel_name,
    attachments: attachments
  }, msgDefaults)

  res.set('content-type', 'application/json')
  res.status(200).json(msg)
  return
}

module.exports = { pattern: /repos/ig, handler: handler }
