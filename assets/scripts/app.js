'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./events')

$(() => {
  // account-related actions
  $('#sign-up-form').on('submit', events.onSignUp)

  $('#sign-in-form').on('submit', events.onSignIn)
  
  $('#change-password-form').on('submit', events.onChangePassword)
  
  $('#sign-out').on('click', events.onSignOut)

  
  // song-related actions
  $('#add-song-form').on('submit', events.onAddSong)

  $('#update-song-form').on('submit', events.onUpdateSong)

  $('#all-songs').on('click', 'button', events.onDeleteSong)

  $('#get-all-songs').on('click', events.getAllSongs)

})
