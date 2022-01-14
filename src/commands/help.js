
'use strict'

const _ = require('lodash')
const config = require('../config')

const msgDefaults = {
  response_type: 'in_channel',
  username: 'hackNY Bot',
  icon_emoji: config('ICON_EMOJI')
}

let attachments = [
  {
    title: 'hackNY Bot is here to help',
    color: '#ff0d00',
    text: '`/hacknybot conduct` returns a link to the Code of Conduct',
    mrkdwn_in: ['text']
  },
  {
    title: 'Configuring hackNYbot',
    color: '#E3E4E6',
    text: '`/hacknybot help` ... you\'re lookin at it! \n',
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

module.exports = { pattern: /help/ig, handler: handler }
