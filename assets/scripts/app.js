'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./events')
const ui = require('./ui')

$(() => {
  // account-related actions
  $('#sign-up-form').on('submit', events.onSignUp)

  $('#sign-in-form').on('submit', events.onSignIn)
  
  $('#change-password-form').on('submit', events.onChangePassword)
  
  $('#sign-out-form').on('submit', events.onSignOut)

  
  // song-related actions
  $('#add-song-form').on('submit', events.onAddSong)

  $('#update-song-form').on('submit', events.onUpdateSong)

  $('body').on('click', '#open-song-update-form', ui.showUpdateForm)

  // update button will be similar to this (but will open update-song form, will have the same data that the button has been given
  // aka the song's ID
  $('body').on('click', '#song-delete-button', events.onDeleteSong)

  $('#get-all-songs').on('click', events.getAllSongs)

})
