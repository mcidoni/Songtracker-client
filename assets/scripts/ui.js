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
  $('.your-songs').show()
  $('#update-song-section').hide()
}

const showUpdateForm = () => {
  $("#update-song-section").show()
}

const signInFailure = () => {
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
  $('#update-song-section').hide()
  $('.your-songs').hide()
  $('#add-song-section').hide()
  const songSection = $('#all-songs')
  songSection.hide()
  $('#sign-out').hide()
}

const signOutFailure = err => {
  $("#message").text('Sign out failed, try again')
}

const addSongSuccess = () => {
  $('#message').text('Song successfully added!')
  $('#add-song-form').trigger('reset')
}

const addSongFailure = err => {
  $('#message').text('Failed to add song, please try again.')
}

const updateSongSuccess = () => {
  $('#message').text('Song successfully updated!')
  const songSection = $('#all-songs')
  songSection.hide()
  const songUpdateForm = $('#update-song-form')
  songUpdateForm.trigger('reset')
}

const updateSongFailure = err => {
  $('#message').text('Failed to update song, please try again.')
}


const deleteSongSuccess = () => {
  $('#message').text('Song successfully deleted!')
  const songSection = $('#all-songs')
  songSection.hide()

}

const deleteSongFailure = err => {
  $('#message').text('Failed to delete song, please try again.')
}

const getSongsSuccess = data => {
  const allSongs = data.songs
  const songSection = $('#all-songs')
  songSection.show()
  const songHtml = []

  allSongs.forEach(song => {
    if (song.owner === store.user._id) {
      songHtml.push(`
        <div class="song-info">
          <p>Song ID: ${song._id}</p>
          <p>Title: ${song.title}</p>
          <p>Artist:${song.artist}</p>
          <p>Album: ${song.album}</p>
          <p>Genre: ${song.genre}</p>
          <button id="song-delete-button" data-songId="${song._id}">Delete Song</button>
          <button id="open-song-update-form" data-songId=${song._id}>Update Song</button>
        </div>
      `)
    }
  })
  const allSongHtmlJoined = songHtml.join("")
  songSection.html(songHtml.join(" "))
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
  getSongsFailure,
  showUpdateForm
}


