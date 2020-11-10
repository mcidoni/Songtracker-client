'use strict'
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../lib/get-form-fields')
const { showSongFailure } = require('./ui')
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

const onShowSong = e => {
  e.preventDefault()
  const form = e.target
  const data = getFormFields(form)
  api.showSong(data)
    .then(ui.showSongSuccess)
    .catch(showSongFailure)
}

const onDeleteSong = e => {
  e.preventDefault()
  const form = e.target
  const data = getFormFields(form)
  api.deleteSong(data)
    .then(ui.deleteSongSuccess)
    .catch(ui.deleteSongFailure)
}


module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onAddSong,
  onUpdateSong,
  onShowSong,
  onDeleteSong
}