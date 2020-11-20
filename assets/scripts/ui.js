'use strict'

const store = require('./store')
const events = require('./events')


const signUpSuccess = res => {
  $("#message").text('Thanks for signing up ' + res.user.email)
  $('#sign-up-form').trigger('reset')
}

const signUpFailure = err => {
  $("#message").text('Sign up failed, try again')
}

const signInSuccess = res => {
  store.user = res.user
  $("#message").text('Successfully signed in ' + res.user.email)
  $('#sign-in-form').trigger('reset')
  $('#change-password-section').css('display', 'block')
  $('#sign-out-section').css('display', 'block')
  $('#sign-up-section').css('display', 'none')
  $('#sign-in-section').css('display', 'none')
  $('#sign-out').show()
  $('#add-song-section').show()
  $('your-songs').show()
  events.getAllSongs()
}

const signInFailure = err => {
  $("#message").text('Sign in failed, try again')
}

const changePasswordSuccess = () => {
  $("#message").text('Successfully changed password!')
  $('#change-password-form').trigger('reset')
}

const changePasswordFailure = err => {
  $("#message").text('Password change failed, try again')
}

const signOutSuccess = () => {
  $("#message").text('You have signed out!')
  delete store.user
  $('#change-password-section').css('display', 'none')
  $('#sign-out-section').css('display', 'none')
  $('#sign-up-section').css('display', 'block')
  $('#sign-in-section').css('display', 'block')
}

const signOutFailure = err => {
  $("#message").text('Sign out failed, try again')
}

const addSongSuccess = () => {
  $('#message').text('Song successfully added!')
}

const addSongFailure = err => {
  $('#message').text('Failed to add song, please try again.')
}

const updateSongSuccess = () => {
  $('#message').text('Song successfully updated!')
  
}

const updateSongFailure = err => {
  $('#message').text('Failed to update song, please try again.')
}


const deleteSongSuccess = () => {
  $('#message').text('Song successfully deleted!')

}

const deleteSongFailure = err => {
  $('#message').text('Failed to delete song, please try again.')
}

const getSongsSuccess = data => {
  const allSongs = data.songs
  const songSection = $('#all-songs')
  allSongs.forEach(song => {
    songSection.append(`<div class='song-info'><p>Title: ${song.title}</p><p>Artist:${song.artist}</p><p>Album: ${song.album}</p><p>Genre: ${song.genre}</p>
    <button id='${delete-song}' data-songId='${song._id}'>Delete Song</button><button>Update Song</button></div>`)
  })
}

const getSongsFailure = err => {
  $('#message').text('Failed to get songs')
}



module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  addSongSuccess,
  addSongFailure,
  updateSongSuccess,
  updateSongFailure,
  deleteSongSuccess,
  deleteSongFailure,
  getSongsSuccess,
  getSongsFailure
}


