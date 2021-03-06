'use strict'
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../lib/get-form-fields')
// const store = require('./store')

const onSignUp = e => {
  e.preventDefault()
  const form = e.target
  const data = getFormFields(form)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = e => {
  e.preventDefault()
  const form = e.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = e => {
  e.preventDefault()
  const form = e.target
  const formData = getFormFields(form)
  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = e => {
  e.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onAddSong = e => {
  e.preventDefault()
  const form = e.target
  const data = getFormFields(form)
  api.addSong(data)
    .then(ui.addSongSuccess)
    .catch(ui.addSongFailure)
}

const onUpdateSong = e => {
  e.preventDefault()
  const form = e.target
  const data = getFormFields(form)
  api.updateSong(data)
    .then(ui.updateSongSuccess)
    .catch(ui.updateSongFailure)
}

const onGetSong = e => {
  e.preventDefault()
  const form = e.target
  const data = getFormFields(form)
  api.showSong(data)
    .then(ui.showSongSuccess)
    .catch(ui.showSongFailure)
}

const onDeleteSong = e => {
  e.preventDefault()
  // same exact thing for update song
  const id = $(e.target).data('songid')
  api.deleteSong(id)
    .then(ui.deleteSongSuccess)
    .catch(ui.deleteSongFailure)
}

const getAllSongs = e => {
  api.getAllSongs()
    .then(ui.getSongsSuccess)
    .catch(ui.getSongsFailure)
}

const onPreUpdateSong = e => {
  e.preventDefault()
}



module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onAddSong,
  onUpdateSong,
  onGetSong,
  onDeleteSong,
  getAllSongs
}