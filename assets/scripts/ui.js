'use strict'

const store = require('./store')
// const events = require('.././scripts/events')


const signUpSuccess = res => {
  $("#message").text('Thanks for signing up ' + res.user.email)
  $('#sign-up-form').trigger('reset')
}

const signUpFailure = err => {
  $("#message").text('Sign up failed, try again')
}

const signInSuccess = res => {
  $("#message").text('Successfully signed in ' + res.user.email)
  store.user = res.user
  $('#sign-in-form').trigger('reset')
  $('#change-password-section').css('display', 'block')
  $('#sign-out-section').css('display', 'block')
  $('#sign-up-section').css('display', 'none')
  $('#sign-in-section').css('display', 'none')
  $('#sign-out').show()
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

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}